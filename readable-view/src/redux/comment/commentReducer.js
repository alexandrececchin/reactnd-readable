import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, FETCH_COMMENTS } from "./commentTypes";

export default function comments(state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENTS.SUCCESS:
            return { ...action.payload.data.entities.comments };
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