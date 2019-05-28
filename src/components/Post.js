import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        return (
            <div className="post">

                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">Some account</div>
                
            </div>
        )
    }
}