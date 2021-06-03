import React, {useEffect, useState} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { LogOut, Loader } from "react-native-feather";
import { LogoutAction } from '../redux/actions/authActions';
import {GetUserImage, UploadUserImage} from '../services/imageService';
import Alert from '../components/alerts/Alert';
import * as ImagePicker from 'expo-image-picker';

function Profile({ currentUser,logOutUser,navigation }) {

  const [url,setUrl] = useState(null);
  const [loadingImg,setLoadingImg] = useState(true);

  const [imageClicked,setImageClicked] = useState(false);

  const [visible, setVisible] = React.useState(false);
  const [text,setText] = useState('null');

  const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  
  const getImage = () => {
    
    setLoadingImg(true);

    GetUserImage(currentUser.username).then(res => {
      setUrl(res.url);
      setLoadingImg(false);
    }).catch((err) => {
      setText(err.message);
      setVisible(true);
      setLoadingImg(false);
    });
  }
  
  const onImageClick = (state) => {
    
    if(loadingImg)
      return;

    setImageClicked(state);

  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    return result;
  };
  const permission = async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
          return;
        }
      }
    };

  const onUpload = async () => {
  
    await permission();

    let result = await pickImage();

    if (result){
          const res = await UploadUserImage(currentUser.username,result);
          console.log(res);
    }
  }

  useEffect(()=>{

    let isMounted = true;

    if(isMounted)
      getImage();

    return () => {isMounted = false};

  },[]);

  return (
    <View style={styles.container}>

      <Alert visible={visible} toggleAlert={toggleAlert} text={text}/>

      {/* Logout button */}
          <TouchableOpacity
            style={styles.exit}
            onPress={()=> logOutUser()}
            >
              <LogOut stroke="white" strokeWidth={2.5} width={26} height={26}/>
          </TouchableOpacity>

          {/* Profile panel */}
        <View style={styles.panel}>

          {imageClicked
            /* Upload image  */
          && <TouchableOpacity style={{...styles.icon,position:'absolute',zIndex:99,backgroundColor:'rgba(0,0,0,0.5)'}}
          >
            <TouchableOpacity style={styles.btn} onPress={()=>{onUpload()}}>
              <Text style={styles.btn_txt}>Upload</Text>
            </TouchableOpacity>
          </TouchableOpacity>}

            <TouchableOpacity style={styles.icon} onPress={()=>{onImageClick(true)}}>
              {/* Profile icon */}
              {loadingImg 
              ? <Image
              style={{width:38,height:38}} 
              source={ require('../assets/tenor.gif')}
              />
              : <Image
              style={{width:iconSize,height:iconSize,borderRadius:iconSize}} 
              source={{uri: url}}
              onLoadEnd={() => {setLoadingImg(false)}}
              />
              }

            </TouchableOpacity>

            {/* Profile username */}
            <View style={styles.info}>
                <Text style={styles.txt}>@{currentUser.username}</Text>
            </View>

            {/* Profile info */}
            <View style={styles.row}>

              {/* Email interactions */}
                <View style={styles.column}>
                    <Text style={{fontSize:16}} >Email: {currentUser.email}</Text>
                </View>
                <View style={styles.column}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn_txt}>Change email</Text>
                  </TouchableOpacity>
                </View>
            </View>

            {/* Friends interactions */}
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={{fontSize:16}} >Friends:0</Text>
                </View>
                <View style={styles.column}>
                  <TouchableOpacity style={styles.btn}
                  onPress={()=> navigation.navigate("Friends")}
                  >
                    <Text style={styles.btn_txt}>Friends List</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => {

    return{
        logOutUser: () => dispatch(LogoutAction()),
    }
}

const mapStateToProps = state => {

    return{
        currentUser : state.Auth.currentUser,
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Profile)

const iconSize = 150;

const styles = StyleSheet.create({
  container: {
    height:'100%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#00BEB3',
  },
  panel:{
    display: 'flex',
    alignItems:'center',
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    marginTop:200,
  },
  icon:{
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      top:-75,
      backgroundColor:'black',
      width:iconSize,
      height:iconSize,
      borderRadius:100,
  },
  info:{
    marginTop:iconSize / 2 + 10,
  },
  txt:{
    fontSize:18,
  },
  row:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
  },
  column:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      fontSize:16,
  },
  exit:{
    position:'absolute',
    top:10,
    right:10,
  },
    btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    marginTop: 20,
    marginBottom:10,
    padding: 6,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 25,
    backgroundColor: '#04AD8F',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  btn_txt: {
    color: 'white',
    fontSize:16,
    fontWeight:'bold',
  },
})
