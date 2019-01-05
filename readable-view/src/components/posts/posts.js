import React, { Fragment } from 'react';
import Post from './post/post';
import PropTypes from 'prop-types';

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

posts.propTypes = {};

export default posts;
