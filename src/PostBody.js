import React,{ Component } from 'react';
import { connect } from 'react-redux';

class PostBody extends Component {
  handleClick(){
    console.log(this.props.likes.length)
  }
  render(){
    return(
      <div className='post-body'>
        <div className='likes-num num' onClick={this.handleClick.bind(this)}>赞:{this.props.likes.length}</div>
        <div className="comment-num num">
          {this.props.comments.length}条评论
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments: state.comments,
  likes:state.likes
})
export default connect(mapStateToProps)(PostBody);
