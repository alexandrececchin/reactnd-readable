import createActionTypes from '../createActionTypes';

export const FETCH_COMMENTS = createActionTypes("FETCH_COMMENTS");
export const ADD_COMMENT = createActionTypes("ADD_COMMENT");
export const UPDATE_COMMENT = createActionTypes("UPDATE_COMMENT");
export const DELETE_COMMENT = createActionTypes("DELETE_COMMENT");
export const VOTE_COMMENT = createActionTypes("VOTE_COMMENT");