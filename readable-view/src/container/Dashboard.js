import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Posts from '../components/posts/posts'

class Dashboard extends Component {
    render() {
        //  console.log(this.props)
        return (
            <Posts />
        );
    }
}

function mapStateToProps({ posts }, props) {
    const { category } = props.match.params;
    if (category) {
        console.log(category)
    }

    return {
        posts,
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard));