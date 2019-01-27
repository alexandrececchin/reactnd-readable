import React from 'react';
import Comment from './comment/comment';
import CommentForm from './comment/commentForm';

const comments = (props) => {
  const { comments, postId } = props;
  return (
    <div className="box-footer box-comments">
      <CommentForm postId={postId} />
      {comments.map((key) => (
        <Comment key={key} commentId={key} />
      ))}
    </div>
  );
};

export default comments;