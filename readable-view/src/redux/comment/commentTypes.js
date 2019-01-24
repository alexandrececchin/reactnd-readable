import createActionTypes from '../createActionTypes';

export const FETCH_COMMENTS = createActionTypes("FETCH_COMMENTS");
export const ADD_COMMENT = createActionTypes("ADD_COMMENT");
export const UPDATE_COMMENT = createActionTypes("UPDATE_COMMENT");
export const DELETE_COMMENT = createActionTypes("DELETE_COMMENT");
export const UP_VOTE_COMMENT = createActionTypes("UP_VOTE_COMMENT");
export const DOWN_VOTE_COMMENT = createActionTypes("DOWN_VOTE_COMMENT");