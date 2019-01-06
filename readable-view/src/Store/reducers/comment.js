import * as constants from "../../Util/constant";

export default function comments(state = {}, action) {
    switch (action.type) {
        case constants.RECEIVE_COMMENTS:
            return { ...state, ...action.comments };
        case constants.ADD_COMMENT:
        case constants.UPDATE_COMMENT:
            const { comment } = action;
            return {
                ...state,
                [action.comment.id]: comment
            }
        case constants.DELETE_COMMENT:
            const { id } = action.id;
            const comments = state.filter(comment => comment.id !== id);

            return { ...state, comments }
        default:
            return state;
    }
}