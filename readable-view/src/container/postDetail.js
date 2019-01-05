import React from 'react';
import Post from '../components/posts/post/post';
import Comments from '../components/comments/comments'


const postDetail = () => {
    return (
        <div className="col-md-10 col-md-offset-1" >
            <div className="box-footer box-comments">
                <Post />
                <Comments />
            </div>
        </div>
    );
};

export default postDetail;