import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import api from '../../service/service';
import { post } from './postSchema';
import { Creators as PostsActions } from "./postActions";

export function* fetchPosts(action) {
  const { category } = action.payload;
  let url = category ? `/${category}/posts` : '/posts'
console.log(url)
  try {

    const response = yield call(api.get, url);
    console.log(normalize(response.data, [post]))
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