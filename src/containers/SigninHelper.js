import React from 'react';
import Signin from './signin';
import {Redirect} from 'react-router-dom';


export default function SigninHelper(props){
    if(props.loggedin === 'YES')
        return <Redirect to = '/profile'/>
    else
        return <Signin />
}