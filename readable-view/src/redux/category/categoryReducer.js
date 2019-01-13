import { FETCH_CATEGORIES } from "./categoryType"

export default function categories(state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORIES.SUCCESS:
            return { ...state, ...action.categories };
        default:
            return state;
    }
}
