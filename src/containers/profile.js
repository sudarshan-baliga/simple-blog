import React, { Component } from 'react';
import {connect} from 'react-redux';
import './profile.css';

var Post = (post, index)=>{
    return (
        <li className = "boxShadow" key = {post.heading + index}>
            <div className = "postTitle">
                {post.heading}
            </div>
            <div className = "postContent">
                {post.content}
            </div>
        </li>
    )
} 

 class Profile extends Component{
    render(){
        return (
            <div className="profile">
                <div className = "profileContainer boxShadow" >
                    <div className="profilePic center">
                    <img src="http://www.mediamanint.com/profiles/superman2.jpg" alt=""/>   
                    </div>
                    <div className="userContent center ">
                        <h1 className = "userName"> {this.props.name}</h1>
                        <h3 className = "userDetails">{this.props.details}</h3>
                        <h3 className = "userGang">Fllowers: <span className = "number"> {this.props.followers} </span>
                            Fllowing: <span className = "number"> {this.props.following} </span>
                        </h3>
                    </div>
                </div>
               { this.props.posts.length > 0 ? 
                    (
                        <div className="posts">
                            <h2  className = "postHead" >Posts by {this.props.name}</h2>
                                {  this.props.posts.map(Post)} : 

                        </div>
                    ) : ''
               }
            </div>
        )
    }
}

function mapStateToProps({login}){
    return login.data;
}

export default connect(mapStateToProps)(Profile);