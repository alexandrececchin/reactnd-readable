import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, FETCH_COMMENTS, VOTE_COMMENT } from "./commentTypes";

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
            }
        case DELETE_COMMENT.SUCCESS:
            return {
                ...state,
                ...payload.data.entities.comments
            }
        default:
            return state;
    }
}