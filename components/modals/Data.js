import RegisteredImage from '../../src/icons/RegisteredImage';
import LoggedIn from '../../src/icons/LoggedInImage';
import RegisterFail from '../../src/icons/RegisterFailImage';
import React from 'react';

export const RegisterSuccesfull = {

    top:'Account Created',
    text:'Please Log In',
    fail:false,
    image: <RegisteredImage width={220} height={153} marginTop={15} marginBottom={10}/>,

}
export const LoginSuccesfull = {

    top:'Log In successful',
    text:'Please Continue',
    fail:false,
    image: <LoggedIn width={220} height={153} marginTop={15} marginBottom={10}/>,

}
export const RegisterFailed = {

    top:'Registration failed',
    text:'Please try again',
    fail:true,
    image: <RegisterFail width={220} height={153} marginTop={15} marginBottom={10}/>,

}
export const LoginFailed = {

    top:'Login failed',
    text:'Please try again',
    fail:true,
    image: <RegisterFail width={220} height={153} marginTop={15} marginBottom={10}/>,

}