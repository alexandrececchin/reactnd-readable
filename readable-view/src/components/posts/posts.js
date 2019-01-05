import React, { Fragment } from 'react';
import Post from './post/post';

const posts = props => {
  return (
    <Fragment>
      <div className="col-md-6" style={{ float: "inherit", marginLeft: "25%" }}>
        <Post />
      </div>
      <div className="col-md-6" style={{ float: "inherit", marginLeft: "25%" }}>
        <Post />
      </div>
    </Fragment>
  );
};

export default posts;
