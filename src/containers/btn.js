import React, { Component } from 'react';
import './btn.css';

 class Button extends Component{
    createRipple (e){ 
        var circle = document.createElement('div');
        var d = e.target.clientWidth; 
        circle.style.width = e.target.style.height = d + 'px';
        // - (d / 2) to  make the center of circle to click point 
        //  - this.offsetLeft cause btn is relative and circle is absolute 
        circle.style.left = e.clientX - e.target.offsetLeft - d / 2 + 'px'; 
        circle.style.top = e.clientY - e.target.offsetTop - d / 2 + 'px'; 
        circle.classList.add('ripple');
        e.target.appendChild(circle);
    }
    render(){
        return(
            <button  onClick = {this.createRipple} style = {this.props} className ="btn">
                 {this.props.children}
            </button>
        )
    }
}

export default   Button 