import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Posts from '../components/posts/posts'

class Dashboard extends Component {
    render() {
        return (
            <Posts posts={this.props.posts} />
        );
    }
}

function mapStateToProps({ posts }, props) {
    const { category } = props.match.params;
    let postsToRender = [];
    if (category) {
        postsToRender = Object.keys(posts).filter(key => posts[key].category === category).map(key => posts[key].id);
    }
    postsToRender = Object.keys(posts);
    return {
        posts: postsToRender
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard));