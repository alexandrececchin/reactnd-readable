import { all, takeLatest } from 'redux-saga/effects';

import * as PostTypes from './post/postTypes';
import { fetchPosts, fetchPost, registerVotePost } from './post/postSaga';

import * as CommentTypes from './comment/commentTypes';
import { fetchComments } from './comment/commentSaga';

import * as CategoryTypes from './category/categoryType';
import { fetchCategories } from './category/categorySaga';

export default function* rootSaga() {
    yield all([
        takeLatest(PostTypes.FECTH_POSTS.REQUEST, fetchPosts),
        takeLatest(PostTypes.FECTH_POST.REQUEST, fetchPost ),
        takeLatest(PostTypes.VOTE_POST.REQUEST, registerVotePost),


        takeLatest(CommentTypes.FETCH_COMMENTS.REQUEST, fetchComments),

        takeLatest(CategoryTypes.FETCH_CATEGORIES.REQUEST, fetchCategories),
    ]);
}
