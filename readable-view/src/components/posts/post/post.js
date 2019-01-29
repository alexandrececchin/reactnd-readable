import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from '../../../redux/post/postActions';
import { formatDate } from "../../../Util/util";
import PostEditView from './postEditView';

class post extends Component {
  state = {
    editView: false
  }
  handleVoteScore = (postId, option) => {
    const { registerPostVotetRequest } = this.props
    registerPostVotetRequest(postId, option)
  }

  handleDeletePost = (postId) => {
    const { deletePostRequest } = this.props
    deletePostRequest(postId)
  }

  handleEditView = () => {
    this.setState({ editView: true })
  }

  handleCancel = () => {
    this.setState({ editView: false })
  }

  handleUpdate = (id, title, body) => {
    console.log('handle Edit')
    const { updatePostRequest } = this.props
    let post = {
      ...this.props.post,
      title: title,
      body: body, timestamp: new Date()
    }
    updatePostRequest(post, id)
  }

  render() {
    const { post } = this.props
    const { author, body, category, id, timestamp, title, voteScore, commentCount } = post || {}

    let element = body;

    if (this.state.editView) {
      element = <PostEditView id={id} body={body} title={title} handleCancel={this.handleCancel} handleSubmit={this.handleUpdate} />
    }

    return (
      <div className="box box-widget">
        <div className="box-header with-border">
          <div className="text-center">
            <h3><a href={"/" + category + "/" + id}>{title}</a></h3>
          </div>

          <div className="user-block">
            <span>
              <a href="/#">{author}</a>
            </span>
            <span className="description" style={{ marginLeft: "0px" }}>{formatDate(timestamp)}</span>
          </div>
          <div className="box-tools">
            <button type="button" className="btn btn-box-tool" data-widget="collapse">
              Edit
          </button>
            <button type="button" onClick={() => this.handleDeletePost(id)}
              className="btn btn-box-tool" data-widget="delete">
              Delete
            </button>
          </div>
        </div>
        <div className="box-body">
          <p>
            {element}
          </p>
          <span onClick={() => this.handleVoteScore(id, "upVote")} >
            <i className="fa fa-plus" />
          </span>
          <span style={{ fontSize: '15px' }}> {voteScore} </span>
          <span onClick={() => this.handleVoteScore(id, "downVote")} >
            <i className="fa fa-minus" />
          </span>
          <span className="pull-right"><i className="fa fa-comment"> {commentCount}</i></span>
        </div>
      </div >
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

function mapStateToProps({ posts }, { id }) {
  let post = posts[id];
  console.log(id)
  return {
    post
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(post);