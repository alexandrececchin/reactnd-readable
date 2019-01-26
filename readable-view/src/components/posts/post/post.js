import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from '../../../redux/post/postActions';
import { formatDate } from "../../../Util/util";

class post extends Component {

  handleVoteScore = (postId, option) => {
    const { registerPostVotetRequest } = this.props
    registerPostVotetRequest(postId, option)
  }

  render() {
    const { post } = this.props
    const { author, body, category, id, timestamp, title, voteScore, commentCount } = post || {}
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
            <button type="button" className="btn btn-box-tool" data-widget="delete">Delete</button>
          </div>
        </div>
        <div className="box-body">
          <p>
            {body}
          </p>
          <span onClick={() => this.handleVoteScore(id, "upVote")} >
            <i className="fa fa-plus" />
          </span>
          <span style={{fontSize: '15px' }}> {voteScore} </span>
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

  return {
    post
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(post);