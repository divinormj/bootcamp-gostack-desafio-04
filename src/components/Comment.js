import React, { Component } from 'react';

class Comment extends Component {

  render() {
    const { author, content } = this.props.data;

    return (
      <div className="post-comments">
        <div className="divider" />
        <div className="comment">
          <img src={author.avatar} className="avatar" />
          <p>
            <span>{author.name}</span>
            {content}
          </p>
        </div>
      </div>
    );
  }
}
export default Comment;