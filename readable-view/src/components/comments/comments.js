import React from 'react';
import Comment from './comment/comment';
import CommentForm from './comment/commentForm';

const comments = (props) => {
  const { comments, postId } = props;
  return (
    <div className="box-footer box-comments">
      {comments.map((key) => (
        <Comment key={key} commentId={key} />
      ))}
      <CommentForm postId={postId} />
    </div>
  );
};

export default comments;