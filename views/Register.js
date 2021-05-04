import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { RegisterAction } from '../redux/actions/AuthActions';
import RegisterHeader from '../src/icons/RegisterHeader';
import {checkLenghtMin,checkLenghtMax,checkEmail} from '../utils/Validators';

function Register({ navigation, registerUser }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [usernameError, setUsernameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);

    const onRegister = () => {
      
      setUsernameError(null);
      setEmailError(null);
      setPasswordError(null);
      setConfirmPasswordError(null);

      if(username.trim() == ''){
        setUsernameError("Please enter username!");
        return;
      }
      if(!checkLenghtMin(username,4)){
        setUsernameError("Username is too short!");
        return;
      }
      if(!checkLenghtMax(username,40)){
        setUsernameError("Username is too long!");
        return;
      }
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
      if(!checkLenghtMin(password,4)){
        setPasswordError("Password is too short!");
        return;
      }
      if(!checkLenghtMax(password,40)){
        setPasswordError("Password is too long!");
        return;
      }
      if(confirmPassword != password){
        setConfirmPasswordError("Passwords do not match!");
        return;
      }

      var data = {
        "username" : username,
        "password" : password,
        "email" : email,
      }

        registerUser(data);
      
    }

  return (
    <View style={styles.container}>

        {/* Page decorations */}
        <RegisterHeader style={styles.headerIcon} >
        </RegisterHeader>
        <Text style={styles.Logo} >Organizer</Text>
        <Text style={{...styles.header,marginTop:120}} >Welcome to the site</Text>

        {/* Username input */}
        {usernameError && <Text style={styles.error}>{usernameError}</Text>}
        <TextInput
        style={styles.text_in}
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder="Username"
        placeholderTextColor='#B9B9B9'
        />
        
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
        textContentType='password'
        placeholderTextColor='#B9B9B9'
        />

        {/* Confirm password input */}
        {confirmPasswordError && <Text style={styles.error}>{confirmPasswordError}</Text>}
        <TextInput
        style={styles.text_in}
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        placeholder="Confirm Password"
        placeholderTextColor='#B9B9B9'
        secureTextEntry={true}
        />

        {/* Register button */}
        <TouchableOpacity
        style={styles.btn}
        onPress={()=> onRegister()}
        >
        <Text style={styles.btn_txt}>Sing Up</Text>

        </TouchableOpacity>

        {/* Facebook register */}
        <TouchableOpacity
        style={{...styles.btn,backgroundColor:'#5678BF',marginTop:0}}
        onPress={()=> onRegister()}
        >
        <Text style={styles.btn_txt}>facebook</Text>

        </TouchableOpacity>

        {/* Navigation to login */}
        <TouchableOpacity
        onPress={()=> navigation.navigate("Login")}
        style={styles.signUp}
        >
          <Text style={{marginBottom:5, fontSize:14 , color:'#015651'}}>Already have An Account?</Text>
          <Text style={{marginBottom:5, fontSize:14 , color:'#015651',textDecorationLine: "underline"}}> Sign In</Text>
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
    color:'black',
    marginTop: 10,
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

const mapDispatchToProps = dispatch => {

    return{
        registerUser: (user) => dispatch(RegisterAction(user)),
    }
}

export default connect (null,mapDispatchToProps) (Register)