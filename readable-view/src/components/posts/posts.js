import React, { Fragment } from 'react';
import Post from './post/post';

const posts = props => {
  return (
    <Fragment>
      <div className="col-md-6">
        <Post />
      </div>
      <div className="col-md-6">
        <Post />
      </div>
    </Fragment>
  );
};

export default posts;
