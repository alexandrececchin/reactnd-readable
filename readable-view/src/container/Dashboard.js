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
    }

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            const { fetchPostsRequest } = this.props
            fetchPostsRequest(this.props.category);
        }
    }

    render() {
        return (
            <div >
                <div className="col-md-6 col-md-offset-3" >
                    <div className="btn-group">
                        <button type="button" className="btn btn- dropdown-toggle" data-toggle="dropdown">
                            Order By: <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a href="/#">Date</a></li>
                            <li><a href="/#">Score</a></li>
                        </ul>
                    </div>
                </div>
                <Posts posts={this.props.posts} />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators(PostActions, dispatch);


function mapStateToProps({ posts }, props) {
    const { category } = props.match.params;
    let postsToRender = Object.keys(posts).filter(key => !posts[key].delete);
    if (category != null) {
        postsToRender = postsToRender.filter(key => posts[key].category === category)
    }
    return {
        category: category,
        posts: postsToRender
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));