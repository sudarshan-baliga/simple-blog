import React, { Component } from 'react'
import './nav.css';
import Button from './btn';


export default class Nav extends Component{
    render(){
        return(
        <nav>
            <div className="navHead">
                <h1>Blog</h1>
            </div>
            <div className="buttons">
                <Button backgroundColor = "#4CAF50">Signin</Button>
                <Button backgroundColor = "#9C27B0"> Signup</Button>
            </div>
        </nav>
        )
    }
}