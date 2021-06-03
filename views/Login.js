import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, addons } from 'react-native';
import { connect } from 'react-redux';
import { LoginAction, LoginFailModalFalse, RegisterSuccessModalFalse, RegisterFailModalFalse } from '../redux/actions/authActions';
import LoginHeader from '../src/icons/LoginHeader';
import {checkLenghtMin,checkLenghtMax,checkEmail} from '../utils/validators';
import CustomModal from '../components/modals/CustomModal';
import {RegisterSuccesfull, RegisterFailed, LoginFailed} from '../components/modals/Data';

function Login({ navigation, loginUser, error, showRegSuccess, showRegFail, showLoginFail, LoginFailFalse, RegisterSuccessFalse, RegisterFailFalse}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const [showRegF,setShowRegFail] = useState(showRegFail);
    const [showRegS,setShowRegSucc] = useState(showRegSuccess);
    const [showLoginF,setShowLoginFail] = useState(showLoginFail);
    
    const onLogin = () => {
      
      setEmailError(null);
      setPasswordError(null);

      if(email.trim() == ''){
        setEmailError("Please enter email!");
        return;
      }
      if(!checkLenghtMin(email,4)){
        setEmailError("Email is too short!");
        return;
      }
      if(!checkLenghtMax(email,40)){
        setEmailError("Email is too long!");
        return;
      }
      if(!checkEmail(email)){
        setEmailError("Invalid email!");
        return;
      }
      if(password.trim() == ''){
        setPasswordError("Please enter password!");
        return;
      }
      
      var data = {
        "email" : email,
        "password" : password
      }
      
      loginUser(data);
    }

  return (
    <View style={styles.container}>

      <CustomModal data={RegisterSuccesfull} show={showRegS} disable={()=>{
        setShowRegSucc(false);
        RegisterSuccessFalse();
        }}/>
      <CustomModal data={RegisterFailed} res={error.message} show={showRegF} disable={()=>{
        setShowRegFail(false);
        RegisterFailFalse();
        }}/>
      <CustomModal data={LoginFailed} res={error.message} show={showLoginF} disable={()=>{
        setShowLoginFail(false);
        LoginFailFalse();
        }}/>

        {/* Page decorations */}
        <LoginHeader style={styles.headerIcon} >
        </LoginHeader>
        <Text style={styles.Logo} >Organizer</Text>
        <Text style={{...styles.header,marginTop:200}} >Welcome to the site</Text>

        {/* Email input */}
        {emailError && <Text style={styles.error}>{emailError}</Text>}
        <TextInput
        style={styles.text_in}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
        placeholderTextColor='#B9B9B9'
        />

        {/* Password input */}
        {passwordError && <Text style={styles.error}>{passwordError}</Text>}
        <TextInput
        style={styles.text_in}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor='#B9B9B9'
        />

        {/* Login button */}
        <TouchableOpacity
        style={styles.btn}
        onPress={()=> onLogin()}
        >
        <Text style={styles.btn_txt}>Sing In</Text>

        </TouchableOpacity>
        
        {/* Login with facebook */}
        <TouchableOpacity
        style={{...styles.btn,backgroundColor:'#5678BF',marginTop:0}}
        onPress={()=> onLogin()}
        >
        <Text style={styles.btn_txt}>facebook</Text>

        </TouchableOpacity>

        {/* Navigation to register */}
        <TouchableOpacity
        onPress={()=> navigation.navigate("Register")}
        style={styles.signUp}
        >
          <Text style={{marginBottom:5, fontSize:14 , color:'#015651'}}>Don't Have An Account?</Text>
          <Text style={{marginBottom:5, fontSize:14 , color:'#015651',textDecorationLine: "underline"}}> Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo:{
    position: 'absolute',
    left:20,
    top:35,
    color: '#00BEB3',
    fontSize:36,
    fontWeight:'bold',
    zIndex:5
  },
  headerIcon:{
    position: 'absolute',
    left:0,
    top:0,
    zIndex:0
  },
  container: {
    fontFamily: 'poppins',
    flex: 1,
    backgroundColor: '#00BEB3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUp:{
    display: 'flex',
    flexDirection: 'row',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
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
    fontSize:22,
    fontWeight:'bold',
  },

  header: {
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20,
  },

  text_in: {
    fontSize:18,
    fontWeight:'bold',
    marginTop: 10,
    color:'black',
    width:'70%',
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 25,
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  error:{
    color:'#f50000',
  }

});
const mapStateToProps = state => {

    return{
        showRegSuccess : state.Auth.showRegSuccess,
        showRegFail : state.Auth.showRegFail,
        showLoginFail : state.Auth.showLoginFail,
        error: state.Auth.error,
    }
}
const mapDispatchToProps = dispatch => {

    return{
        loginUser: (user) => dispatch(LoginAction(user)),
        LoginFailFalse: () => dispatch(LoginFailModalFalse()),
        RegisterSuccessFalse: () => dispatch(RegisterSuccessModalFalse()),
        RegisterFailFalse: () => dispatch(RegisterFailModalFalse()),
    }
}

export default  connect (mapStateToProps,mapDispatchToProps) (Login)