import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Posts from '../components/posts/posts';
import { Creators as PostActions } from '../redux/post/postActions';

class Dashboard extends Component {
    componentDidMount() {
        const { category, fetchPostsRequest } = this.props
        fetchPostsRequest(category);
        console.log(category);
    }

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            console.log('componentDidUpdate')
            const { fetchPostsRequest } = this.props
            fetchPostsRequest(this.props.category);
        }
    }

    render() {
        return (
            <Posts posts={this.props.posts} />
        );
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators(PostActions, dispatch);


function mapStateToProps({ posts }, props) {
    const { category } = props.match.params;
    let postsToRender = Object.keys(posts);


    return {
        category: category,
        posts: postsToRender
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));