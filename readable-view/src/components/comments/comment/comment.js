import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const comment = props => {
  return (
    <Fragment>
      <div class="box-comment">
        <img
          class="img-circle img-sm"
          src="../dist/img/user3-128x128.jpg"
          alt="User"
        />
        <div class="comment-text">
          <span class="username">
            Maria Gonzales
            <span class="text-muted pull-right">8:03 PM Today</span>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default comment;
