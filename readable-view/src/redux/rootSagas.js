import { all, takeLatest } from 'redux-saga/effects';

import PostTypes from './post/postTypes';
import { fetchPosts } from './post/postSaga';

import CategoryTypes from './category/categoryType';
import { fetchCategories } from './category/categorySaga';

export default function* rootSaga() {
    yield all([
        takeLatest(PostTypes.RETRIEVE_POSTS.REQUEST, fetchPosts),

        takeLatest(CategoryTypes.FETCH_CATEGORIES.REQUEST, fetchCategories),
    ]);
}
