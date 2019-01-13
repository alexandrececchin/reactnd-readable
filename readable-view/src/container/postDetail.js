import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Post from '../components/posts/post/post';
import Comments from '../components/comments/comments'
import { handleGetCommentsByPostId } from "../redux/comment/actions";


class postDetail extends Component {
    componentDidMount() {
        let postId = this.props.match.params.id;
        handleGetCommentsByPostId(postId);
    }

    render() {
        const id = this.props.match.params.id;
        return (
            <div className="col-md-10 col-md-offset-1" >
                <div className="box-footer box-comments">
                    <Post id={id} />
                    <Comments postId={id} />
                </div>
            </div>
        );
    }
}

export default withRouter(postDetail);