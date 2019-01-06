import * as constants from "../../Util/constant";

export function receiveCategories(categories) {
    return {
        type: constants.RECEIVE_CATEGORIES,
        categories
    }
}

