import React, { Component } from 'react';
import Comment from './comment/comment';
import { connect } from 'react-redux';

class comments extends Component {
  render() {
    const { commentsToRender } = this.props || {}
    return (
      <div className="box-footer box-comments">

        {commentsToRender.map((comment) => (
            <Comment comment={comment} />
          ))}

        <div className="box-footer">
          <form action="#" method="post">
            <img
              className="img-responsive img-circle img-sm"
              src="../dist/img/user4-128x128.jpg"
              alt="Alt Text"
            />
            <div className="img-push">
              <input
                type="text"
                className="form-control input-sm"
                placeholder="Press enter to post comment"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ comments }, props) {
  let { postId } = props;
  let commentsToRender = Object.keys(comments).filter(key => !comments[key].deleted)

  return {
    commentsToRender,
  };
}


export default connect(mapStateToProps)(comments);