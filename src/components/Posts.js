import React, { Component } from 'react';
import Post from "./Post"

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjn9IGkhMDiAhXC86YKHeE7DuIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.visitportugal.com%2Fen%2Fexperiencias%2Fnatureza&psig=AOvVaw3xQ11gCzr5Wm5SPxwyVJf4&ust=1559195020567774" />
                <Post alt="nature" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjn9IGkhMDiAhXC86YKHeE7DuIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.visitportugal.com%2Fen%2Fexperiencias%2Fnatureza&psig=AOvVaw3xQ11gCzr5Wm5SPxwyVJf4&ust=1559195020567774"/>
            </div>
        )
    }
}