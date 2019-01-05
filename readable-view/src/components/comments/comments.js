import React, { Fragment } from 'react';
import Comment from './comment/comment';
import PropTypes from 'prop-types';

const comments = props => {
  return (
    <div class="box-footer box-comments">
      <Comment />
      <Comment />
    </div>
  );
};

comments.propTypes = {};

export default comments;
