import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formatDate } from "../../../Util/util";
import { Creators as CommentActions } from '../../../redux/comment/commentActions';

class comment extends Component {

  handleCommentVote = (commentId, option) => {
    const { registerCommentVoteRequest } = this.props
    registerCommentVoteRequest(commentId, option)
  }

  render() {
    const { author, body, timestamp, voteScore, id } = this.props.comment || {}
    return (
      <div className="box-footer box-comments">
        <div className="box-comment">
          <div className="pull-left" style={{ marginRight: '5px', textAlign: 'center' }}>
            <span onClick={() => this.handleCommentVote(id, "upVote")}  >
              <i className="fa fa-arrow-up"></i>
            </span>
            <h6 style={{ margin: '0', fontSize: '15px' }}>
              {voteScore}
            </h6>
            <span onClick={() => this.handleCommentVote(id, "downVote")}>
              <i className="fa fa-arrow-down"></i>
            </span>
          </div>

          <div className="comment-text" style={{ marginLeft: "10px" }}>
            <span className="username">
              {author}
              <span className="text-muted pull-right">{formatDate(timestamp)}</span>
            </span>
            {body}
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(CommentActions, dispatch);

function mapStateToProps({ comments }, { commentId }) {
  let comment = comments[commentId];
  return {
    comment,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(comment);

