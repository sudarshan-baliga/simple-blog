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
            <div className="buttons">
               <Link to = "signin"> <Button backgroundColor = "#4CAF50">Sign in</Button> </Link>
               <Link to = "signup"> <Button backgroundColor = "#9C27B0"> Sign up</Button> </Link>
            </div>
        </nav>
        )
    }
}