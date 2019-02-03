import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Posts from '../components/posts/posts';
import { Creators as PostActions } from '../redux/post/postActions';
import { Selectors } from '../redux/rootReducer';

function getSortedPostsArray(posts, option) {
  if (option) {
    switch (option) {
      case 'score':
        return posts.sort((a, b) => a.voteScore < b.voteScore).map(p => p.id);
      case 'date':
        return posts.sort((a, b) => a.timestamp < b.timestamp).map(p => p.id);
      case 'author':
        return posts.sort((a, b) => a.author.localeCompare(b.author));
      default:
        return posts.map(p => p.id);
    }
  } else {
    return posts.map(p => p.id);
  }
}

class Dashboard extends Component {
  state = {
    filterOption: ''
  };

  componentDidMount() {
    const { category, fetchPostsRequest } = this.props;
    fetchPostsRequest(category);
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      const { fetchPostsRequest } = this.props;
      fetchPostsRequest(this.props.category);
    }
  }

  handleChangeFilter = option => {
    this.setState({ filterOption: option });
  };

  render() {
    const postsIds = getSortedPostsArray(this.props.posts, this.state.filterOption);
    return (
      <div>
        <div className="col-md-6 col-md-offset-3">
          <div className="btn-group">
            <button type="button" className="btn btn- dropdown-toggle" data-toggle="dropdown">
              Order By: <span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="/#" onClick={() => this.handleChangeFilter('date')}>
                  Date
                </a>
              </li>
              <li>
                <a href="/#" onClick={() => this.handleChangeFilter('score')}>
                  Score
                </a>
              </li>
              {/* <li>
                <a href="/#" onClick={() => this.handleChangeFilter('author')}>
                  Author
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <Posts posts={postsIds} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

function mapStateToProps(state, props) {
  const { category } = props.match.params;
  let postsToRender = Selectors.posts.getVisiblePosts(state);

  if (category != null) {
    postsToRender = Selectors.posts.getPostsByCategory(state, category);
  }

  return {
    category: category,
    posts: postsToRender
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
