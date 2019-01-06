import * as constants from "../../Util/constant";

export default function posts(state = {}, action) {
    switch (action.type) {
        case constants.RECEIVE_POST:
            console.log(constants.RECEIVE_POST);
            return { ...state, ...action.posts };
        case constants.ADD_POST:
        case constants.UPDATE_POST:
            const { post } = action;
            return {
                ...state,
                [action.post.id]: post
            }
        case constants.DELETE_POST:
            const { id } = action.id;
            const posts = state.filter(post => post.id !== id);

            return { ...state, posts }

        default:
            return state;
    }
}