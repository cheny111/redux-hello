import React, { Component } from 'react';
import './App.css';
import CommentBox from './CommentBox.js';
import PostBody from './PostBody.js';
import store from './store.js';
import { Provider } from 'react-redux';

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="top  clearfix">
            <PostBody/>
          </div>
          <div className="bottom clearfix">
            <CommentBox/>
         </div>

        </div>
    </Provider>
    )
  }
}

export default App;
