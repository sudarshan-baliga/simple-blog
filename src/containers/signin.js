import React, { Component } from 'react';
import Button from './btn';
import './signin.css';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Login from '../actions'

class signin extends Component{
    constructor(props){
        super(props);
        this.state = {'name':'', 'password':''};
        this.nameChange = this.nameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    nameChange(e){
        this.setState({'name': e.target.value});
    }

    passwordChange(e){
        this.setState({'password': e.target.value});
    }

    clickHandler(type){
        if(type === 'in'){
            this.props.Login(this.state);
        }
    }
    render(){
        //using same component for signup
        var name = window.location.pathname.slice(5,);
        var color = name === "in" ? "#4CAF50" : "#9C27B0";
        return(

            <div>
                <div className = "signinContainer flexCenter boxShadow">
                    <i className="material-icons face"  style = 
                    {{color:color}}> account_circle </i>
                    <input onChange = {this.nameChange} type="text" name="name" placeholder = "User name"  />
                    <input onChange = {this.passwordChange} type="password" name="password" placeholder = "Password" />
                    <Button onClick = {()=>{this.clickHandler(name) }} backgroundColor = {color}>
                     Sign {name} </Button>
                    {name === "in" ?  <Link to = "signup"> <Button backgroundColor = "#9C27B0">
                    Sign up</Button> </Link> : ""}
                </div>
            </div>  
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( {Login}, dispatch);
}

export default connect(null, mapDispatchToProps)(signin);