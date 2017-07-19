import React from 'react';

export default class  CommentBox extends React.Component {
  constructor() {
    super()
    this.state={
      comments:['hello','world']
    }
  }
  handleSubmit(e){
    e.preventDefault()
    console.log(this.textInput.value)
    let newcomment=this.textInput.value
    this.setState({
      comments:[...this.state.comments,newcomment]
    })
    this.textInput.value=''
  }
  render(){
    let commentList=this.state.comments.map(item=>(
      <li className="comment" key={Math.random()}>{item}</li>
    ))
    return(
      <div className='comment-box'>
        {commentList}
        <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className="input" ref={(value)=>this.textInput=value}/>
          <button type="submit" className="submit-btn" >提交</button>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}
