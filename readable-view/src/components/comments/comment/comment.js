import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formatDate } from "../../../Util/util";
import { Creators as CommentActions } from '../../../redux/comment/commentActions';
import CommentEditView from './commentEditView';

class comment extends Component {
  state = {
    isEditView: false
  }

  handleCommentVote = (commentId, option) => {
    const { registerCommentVoteRequest } = this.props
    registerCommentVoteRequest(commentId, option)
  }
  handleDeleteComment = (commentId,parentId ) => {
    const {deleteCommentRequest} = this.props
    deleteCommentRequest(commentId, parentId)
  }

  handleEdit = () => {
    this.setState({ isEditView: true })
  }

  handleEditCancel = () => {
    this.setState({ isEditView: false })
  }

  handleUpdateComment = (params, id, parentId) => {
    const { updateCommentRequest } = this.props
    updateCommentRequest(params, id, parentId)
    this.setState({ isEditView: false })
  }

  render() {
    const { author, body, timestamp, voteScore, id, parentId } = this.props.comment || {}

    let element = body;
    if (this.state.isEditView) {
      element = <CommentEditView body={body} id={id} parentId={parentId}
        handleSubmit={this.handleUpdateComment} handleCancel={this.handleEditCancel} />
    }

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
              <div className="pull-right" >
                <span className="text-muted">
                  {formatDate(timestamp)}
                </span>
                <span style={{ margin: '0 4px 0 4px' }} onClick={() => this.handleEdit()} >
                  <i className="fa fa-pencil" style={{ cursor: 'pointer' }} />
                </span>
                <span onClick={() => this.handleDeleteComment(id, parentId)} >
                  <i className="fa fa-trash" style={{ cursor: 'pointer' }} />
                </span>
              </div>
            </span>
            {element}
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

