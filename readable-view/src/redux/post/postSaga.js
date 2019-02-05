import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import api from '../../service/service';
import { post as postSchema } from './postSchema';
import { Creators as PostsActions } from './postActions';

export function* fetchPosts(action) {
  const { category } = action.payload;
  let url = category ? `/${category}/posts` : '/posts';

  try {
    const response = yield call(api.get, url);

    yield put(PostsActions.fetchPostsSuccess(normalize(response.data, [postSchema]), category));
  } catch (err) {
    yield put(PostsActions.fetchPostsError('An error has occurred. Please, refresh the page.'));
  }
}

export function* fetchPost(action) {
  const { id, category } = action.payload;
  let url = `/posts/${id}`;

  try {
    const response = yield call(api.get, url);
    let data = response.data;
    //IF Api doesn't return anything to post, create fake object just to redirect to 404 page
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      data = { id, deleted: true };
    }
    yield put(PostsActions.fetchSinglePostSuccess(normalize(data, postSchema), category));
  } catch (err) {
    yield put(
      PostsActions.fetchSinglePostError('An error has occurred. Please, refresh the page.')
    );
  }
}

export function* registerVotePost(action) {
  const { postId, option } = action.payload;

  try {
    const response = yield call(api.post, `/posts/${postId}`, { option });
    yield put(PostsActions.registerPostVoteSuccess(normalize(response.data, postSchema), postId));
  } catch (err) {
    yield put(
      PostsActions.registerPostVoteError('An error has occurred. Please, refresh the page.')
    );
  }
}

export function* updatePost(action) {
  const { title, body, postId } = action.payload;
  const params = {
    title,
    body
  };

  try {
    const response = yield call(api.put, `/posts/${postId}`, { ...params });
    console.log('response :', normalize(response.data, postSchema));
    yield put(PostsActions.updatePostSuccess(normalize(response.data, postSchema)));
  } catch (err) {
    yield put(PostsActions.updatePostError('An error has occurred. Please, refresh the page.'));
  }
}

export function* deletePost(action) {
  const { postId } = action.payload;
  try {
    const response = yield call(api.delete, `/posts/${postId}`);
    console.log('response :', normalize(response.data, postSchema));
    yield put(PostsActions.deletePostSuccess(normalize(response.data, postSchema)));
  } catch (err) {
    yield put(PostsActions.deletePostError('An error has occurred. Please, refresh the page.'));
  }
}

export function* addPost(action) {
  const { post } = action.payload;

  try {
    const response = yield call(api.post, '/posts', { ...post });

    yield put(PostsActions.addPostSuccess(normalize(response.data, postSchema)));
  } catch (err) {
    yield put(PostsActions.addPostError('An error has occurred. Please, refresh the page.'));
  }
}
