import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from '../../../redux/post/postActions';
import CategorySelect from '../../category/categorySelect';

class postEditView extends Component {
  state = {
    post: {
      id: '',
      body: '',
      title: '',
      category: ''
    },
    postError: '',
    titleError: ''
  };

  componentWillMount() {
    if (this.props.post) {
      this.setState({
        post: this.props.post
      });
    }
  }

  handlePostChange = e => {
    const { post } = this.state;
    post.body = e.target.value;

    this.setState({ post }, () => {
      this.validatePost();
    });
  };

  validatePost = () => {
    const { body } = this.state.post;
    this.setState({
      postError: body.length > 3 ? null : 'The post body must be longer than 3 characters'
    });
  };

  handleTitleChange = e => {
    const { post } = this.state;
    post.title = e.target.value;

    this.setState({ post }, () => {
      this.validateTitle();
    });
  };

  validateTitle = () => {
    const { title } = this.state.post;
    this.setState({
      titleError: title.length > 3 ? null : 'The Title must be longer than 3 characters'
    });
  };

  handleCategorySelect = category => {
    const { post } = this.state;
    post.category = category;
    this.setState({ post });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.state.post;
    let post = {
      ...this.state.post,
      timestamp: new Date()
    };

    this.props.handleSubmit(post, id);
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.handleCancel();
  };

  render() {
    return (
      <Fragment>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className={`form-group ${this.state.titleError ? 'has-error' : ''} `}>
                <label htmlFor="post-text">Title: </label>
                <div id="post-text" className="img-push">
                  <input
                    value={this.state.post.title}
                    type="text"
                    onChange={this.handleTitleChange}
                    className="form-control input-sm"
                    placeholder="Enter a title"
                  />
                  <span>{this.state.titleError}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Category*: </label>
                <CategorySelect
                  handleSelect={this.handleCategorySelect}
                  selectedOption={this.state.post.category}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className={`form-group ${this.state.postError ? 'has-error' : ''} `}>
                <label htmlFor="post-text">Post: </label>
                <div id="post-text" className="img-push">
                  <textarea
                    value={this.state.post.body}
                    type="text"
                    onChange={this.handlePostChange}
                    className="form-control input-sm"
                    placeholder="Enter a text to post"
                  />
                  <span>{this.state.postError}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="box-body btn-group pull-right">
              <button
                type="button"
                className="btn btn-primary btn-xs"
                onClick={this.handleSubmit}
                disabled={this.state.postError || this.state.titleError}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-default btn-xs"
                style={{ marginLeft: '5px' }}
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  };
}

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(postEditView);
