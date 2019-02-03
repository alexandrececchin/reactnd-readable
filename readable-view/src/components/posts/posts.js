import React, { Fragment } from 'react';
import Post from './post/post';


const posts = props => {
  const { posts } = props;

  return (
    <Fragment>
      <div className="col-md-6 col-md-offset-3">
        {posts.map(key => (
          <Post key={key} id={key} />
        ))}
      </div>
    </Fragment>
  );
};

export default posts;
