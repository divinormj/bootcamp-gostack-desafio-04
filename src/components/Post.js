import React, { Component } from 'react';

import Comment from './Comment';

class Post extends Component {
  render() {
    const {author, date, content, comments} = this.props.data;
    
    return (
      <div className="post">
        <div className="post-header">
          <img src={author.avatar} className="avatar"></img>
          <div className="details">
            <span>{author.name}</span>
            <span>{date}</span>
          </div>
        </div>
        <p className="post-content">
          {content}
        </p>
        {comments.map(comment => <Comment data={comment}/>)}
      </div>
    );
  }
}

export default Post;