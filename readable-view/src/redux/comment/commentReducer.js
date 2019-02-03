import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENTS,
  VOTE_COMMENT
} from './commentTypes';
import { createSelector } from 'reselect';

export default function comments(state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case FETCH_COMMENTS.SUCCESS:
      return { ...action.payload.data.entities.comments };
    case ADD_COMMENT.SUCCESS:
    case VOTE_COMMENT.SUCCESS:
    case UPDATE_COMMENT.SUCCESS:
      return {
        ...state,
        ...payload.data.entities.comments
      };
    case DELETE_COMMENT.SUCCESS:
      return {
        ...state,
        ...payload.data.entities.comments
      };
    default:
      return state;
  }
}

const commentList = (state, id) => {
  let comments = state.comments;
  return Object.keys(comments)
    .map(key => comments[key]).filter(c => c.parentId === id)
};

export const getVisibleComments = createSelector(
  [commentList],
  commentList => {
    return commentList.filter(c => !c.deleted).map(c => c.id);
  }
);
