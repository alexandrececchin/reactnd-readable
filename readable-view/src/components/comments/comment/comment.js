import React, { Fragment } from 'react';

const comment = props => {
  return (
    <Fragment>
      <div className="box-footer box-comments">
        <div className="box-comment">
          <div className="comment-text" style={{ marginLeft: "10px" }}>
            <span className="username">
              Maria Gonzales
              <span className="text-muted pull-right">8:03 PM Today</span>
            </span>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="box-comment">
          <div className="comment-text" style={{ marginLeft: "10px" }}>
            <span className="username">
              Nora Havisham
              <span className="text-muted pull-right">8:03 PM Today</span>
            </span>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default comment;
