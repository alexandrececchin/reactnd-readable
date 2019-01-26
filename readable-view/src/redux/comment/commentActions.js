import * as Types from './commentTypes';

export const Creators = {
  fetchCommentsRequest: postId => ({
    type: Types.FETCH_COMMENTS.REQUEST,
    payload: { postId },
  }),
  fetchCommentsSuccess: (data) => ({
    type: Types.FETCH_COMMENTS.SUCCESS,
    payload: { data },
  }),
  fetchCommentsError: error => ({
    type: Types.FETCH_COMMENTS.ERROR,
    payload: { error },
  }),
  registerCommentVoteRequest: (commentId, option) => ({
    type: Types.VOTE_COMMENT.REQUEST,
    payload: { commentId, option },
  }),
  registerCommentVoteSuccess: (data, commentId) => ({
    type: Types.VOTE_COMMENT.SUCCESS,
    payload: { data, commentId },
  }),
  registerCommentVoteError: error => ({
    type: Types.VOTE_COMMENT.ERROR,
    payload: { error },
  }),
  addCommentRequest: (params, postId) => ({
    type: Types.ADD_COMMENT.REQUEST,
    payload: { ...params, parentId: postId },
  }),
  addCommentSuccess: (data, postId) => ({
    type: Types.ADD_COMMENT.SUCCESS,
    payload: { data, postId },
  }),
  addCommentError: error => ({
    type: Types.ADD_COMMENT.ERROR,
    payload: { error },
  }),
  editCommentRequest: (params, commentId, postId) => ({
    type: Types.UPDATE_COMMENT.REQUEST,
    payload: { ...params, commentId, postId },
  }),
  editCommentSuccess: (data, postId) => ({
    type: Types.UPDATE_COMMENT.SUCCESS,
    payload: { data, postId },
  }),
  editCommentError: error => ({
    type: Types.UPDATE_COMMENT.ERROR,
    payload: { error },
  }),
  deleteCommentRequest: (commentId, postId) => ({
    type: Types.DELETE_COMMENT.REQUEST,
    payload: { commentId, postId },
  }),
  deleteCommentSuccess: (data, postId) => ({
    type: Types.DELETE_COMMENT.SUCCESS,
    payload: { data, postId },
  }),
  deleteCommentError: error => ({
    type: Types.DELETE_COMMENT.ERROR,
    payload: { error },
  }),
}