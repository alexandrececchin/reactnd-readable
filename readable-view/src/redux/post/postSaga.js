import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import api from '../../service/service';
import { post } from './postSchema';
import { Creators as PostsActions } from "./postActions";

export function* fetchPosts(action) {
  const { category } = action.payload;
  let url = category ? '/posts' : `/${category}/posts`

  try {
    const response = yield call(api.get, url);
    yield put(
      PostsActions.fetchPostsSuccess(normalize(response.data, [post]), category)
    );
  } catch (err) {
    yield put(
      PostsActions.fetchPostsError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  }
}