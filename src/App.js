import React, { Component } from 'react';
import './App.css';
import CommentBox from './CommentBox.js';
import PostBody from './PostBody.js';

class App extends Component {
  render() {
    return (
      <div>
        <PostBody/>
        <CommentBox Bgc='lightgreen'/>

      </div>
    );
  }
}

export default App;
