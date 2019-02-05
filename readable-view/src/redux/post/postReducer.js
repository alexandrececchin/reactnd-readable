import {
  FECTH_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  VOTE_POST,
  FECTH_POST
} from './postTypes';
import { ADD_COMMENT, DELETE_COMMENT } from '../comment/commentTypes';

import { createSelector } from 'reselect';

export default function posts(state = {}, action) {
  switch (action.type) {
    case FECTH_POSTS.SUCCESS:
    case FECTH_POST.SUCCESS:
    case ADD_POST.SUCCESS:
    case VOTE_POST.SUCCESS:
    case UPDATE_POST.SUCCESS:
    case DELETE_POST.SUCCESS:
      const { payload } = action;
      return {
        ...state,
        ...payload.data.entities.posts
      };
    case ADD_COMMENT.SUCCESS:
      return {
        ...state,
        [action.payload.postId]: {
          ...state[action.payload.postId],
          commentCount: state[action.payload.postId].commentCount + 1
        }
      };
    case DELETE_COMMENT.SUCCESS:
      return {
        ...state,
        [action.payload.postId]: {
          ...state[action.payload.postId],
          commentCount: state[action.payload.postId].commentCount - 1
        }
      };

    default:
      return state;
  }
}
const postList = state => state.posts;

export const getVisiblePosts = createSelector(
  postList,
  posts => {
    return Object.keys(posts)
      .map(key => posts[key])
      .filter(post => !post.deleted)
      .map(post => post);
  }
);

export const getPostsByCategory = (state, category) => {
  let visiblePosts = getVisiblePosts(state).filter(p => p.category === category);
  return visiblePosts;
};

export const getPost = (state, postId) => state.posts[postId];
