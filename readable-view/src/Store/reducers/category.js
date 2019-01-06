import * as constants from "../../Util/constant";

export default function users(state = {}, action) {
    switch (action.type) {
        case constants.RECEIVE_CATEGORIES:
            return { ...state, ...action.categories };
        default:
            return state;
    }
}