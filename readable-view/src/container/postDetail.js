import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Post from '../components/posts/post/post';
import Comments from '../components/comments/comments'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from '../redux/post/postActions';


class postDetail extends Component {
    componentDidMount() {
        console.log('postdetail did mount')
        const { category, id } = this.props.match.params;
        const { fetchSinglePostRequest } = this.props;
        fetchSinglePostRequest(id, category);
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

const mapDispatchToProps = dispatch =>
    bindActionCreators(PostActions, dispatch);

function mapStateToProps({ posts }, props) {
    const { category, id } = props.match.params;
    return {
        category,
        id
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(postDetail));