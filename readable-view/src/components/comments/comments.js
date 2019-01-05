import React from 'react';
import Comment from './comment/comment';

const comments = props => {
  return (
    <div className="box-footer box-comments">
      <Comment />
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
};

export default comments;
