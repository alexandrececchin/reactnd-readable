import { combineReducers } from 'redux';
import posts, { getVisiblePosts, getPostsByCategory, getPost } from './post/postReducer';
import categories from './category/categoryReducer';
import comments, { getVisibleComments } from './comment/commentReducer';
import isLoading from './loading/loadingReducer';
import notification from './notification/notificationReducer';

export default combineReducers({ posts, comments, categories, isLoading, notification });

export const Selectors = {
  posts: {
    getVisiblePosts: state => getVisiblePosts(state),
    getPost: (state, postId) => getPost(state, postId),
    getPostsByCategory: (state, category) => getPostsByCategory(state, category)
  },
  comments: {
    getVisibleComments: (state, parentId) => getVisibleComments(state, parentId)
  }
};
