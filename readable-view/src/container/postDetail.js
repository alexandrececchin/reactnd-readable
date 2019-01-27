import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Post from '../components/posts/post/post';
import Comments from '../components/comments/comments'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from '../redux/post/postActions';
import { Creators as CommentActions } from "../redux/comment/commentActions";


class postDetail extends Component {
    componentDidMount() {
        const { category, id } = this.props.match.params;
        const { fetchSinglePostRequest, fetchCommentsRequest } = this.props;
        fetchSinglePostRequest(id, category);
        fetchCommentsRequest(id);
    }

    render() {
        const id = this.props.match.params.id;
        const { commentsToRender } = this.props;
        return (
            <div className="col-md-10 col-md-offset-1" >
                <div className="box-footer box-comments">
                    <Post id={id} />
                    <Comments postId={id} comments={commentsToRender} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ...PostActions, ...CommentActions }, dispatch);

function mapStateToProps({ comments }, props) {
    console.log(comments)
    const { category, id } = props.match.params;
    let commentsToRender = Object.keys(comments).filter(key => !comments[key].deleted && comments[key].parentId === id);
    console.log(commentsToRender)
    return {
        category,
        id,
        commentsToRender
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(postDetail));