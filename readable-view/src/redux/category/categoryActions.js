import Types from "./categoryType";


export const Creators = {
    fetchCategoriesRequest: () => ({
        type: Types.FETCH_CATEGORIES_REQUEST,
    }),
    fetchCategoriesSuccess: data => ({
        type: Types.FETCH_CATEGORIES_SUCCESS,
        payload: { data },
    }),
    fetchCategoriesError: error => ({
        type: Types.FETCH_CATEGORIES_ERROR,
        payload: { error },
    }),
};
