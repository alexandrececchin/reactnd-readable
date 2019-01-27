import { combineReducers } from 'redux';
import posts from './post/postReducer';
import categories from './category/categoryReducer';
import comments from './comment/commentReducer'
import isLoading from './loading/loadingReducer';

export default combineReducers({ posts, comments, categories, isLoading });