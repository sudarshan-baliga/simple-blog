import React, { Component } from 'react'
import './nav.css';
import Button from './btn';
import {Link} from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return(
        <nav className = "flexCenter boxShadow">
            <div className="navHead">
                <h1>Blog</h1>
            </div>
                {this.props.login ==="NO" ?
                    <div className="buttons">
                        <Link to = "signin"> <Button className = "signinBtn" >Sign in</Button> </Link>
                        <Link to = "signup"> <Button className = "signupBtn"> Sign up</Button> </Link>
                    </div>
                        :
                     <div className="buttons">
                         <Button className = "logoutBtn" >Log out</Button>
                    </div>
                }
        </nav>
        )
    }
}