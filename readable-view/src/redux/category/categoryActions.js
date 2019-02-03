import * as Types from "./categoryType";


export const Creators = {
    fetchCategoriesRequest: () => ({
        type: Types.FETCH_CATEGORIES.REQUEST,
    }),
    fetchCategoriesSuccess: data => ({
        type: Types.FETCH_CATEGORIES.SUCCESS,
        payload: { data },
    }),
    fetchCategoriesError: error => ({
        type: Types.FETCH_CATEGORIES.ERROR,
        payload: { error },
    }),
};
