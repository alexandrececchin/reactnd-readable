import { RECEIVE_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from "./commentTypes";

export default function comments(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS.SUCCESS:
            return { ...state, ...action.comments };
        case ADD_COMMENT.SUCCESS:
        case UPDATE_COMMENT.SUCCESS:
            const { comment } = action;
            return {
                ...state,
                [action.comment.id]: comment
            }
        case DELETE_COMMENT.SUCCESS:
            const { id } = action.id;
            const comments = state.filter(comment => comment.id !== id);

            return { ...state, comments }
        default:
            return state;
    }
}