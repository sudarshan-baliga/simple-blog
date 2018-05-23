import React, { Component } from 'react';
import Button from './btn';
import './signin.css';
import {Link} from 'react-router-dom';

export default class signin extends Component{
    render(){
        //using same component for signup
        var name = this.props.location.pathname.slice(5,);
        var color = name === "in" ? "#4CAF50" : "#9C27B0";
        return(
            <div>
                <div className = "signinContainer flexCenter boxShadow">
                    <i className="material-icons face"  style = 
                    {{color:color}}> account_circle </i>
                    <input type="text" name="name" placeholder = "User name"  />
                    <input type="password" name="password" placeholder = "Password" />
                    <Button backgroundColor = {color}>
                     Sign {name} </Button>
                    {name === "in" ?  <Link to = "signup"> <Button backgroundColor = "#9C27B0">
                    Sign up</Button> </Link> : ""}
                </div>
            </div>
        )
    }
}