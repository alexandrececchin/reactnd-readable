import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import api from '../../service/service';
import { post } from './postSchema';
import { Creators as PostsActions } from "./postActions";

export function* fetchPosts(action) {
  const { category } = action.payload;
  let url = category ? `/${category}/posts` : '/posts'

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


export function* fetchPost(action) {
  const { id, category } = action.payload;
  let url = `/posts/${id}`;

  try {
    const response = yield call(api.get, url);

    yield put(
      PostsActions.fetchSinglePostSuccess(normalize(response.data, post), category)
    );
  } catch (err) {
    yield put(
      PostsActions.fetchSinglePostError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  }
}

export function* registerVotePost(action) {
  const { postId, option } = action.payload;


  try {
    const response = yield call(api.post, `/posts/${postId}`, { option });
    console.log('response ', normalize(response.data, post))
    yield put(
      PostsActions.registerPostVoteSuccess(normalize(response.data, post), postId),
    );
  } catch (err) {
    yield put(
      PostsActions.registerPostVoteError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  }
}