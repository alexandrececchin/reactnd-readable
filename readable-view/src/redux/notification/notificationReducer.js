import {
  FECTH_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  VOTE_POST,
  FECTH_POST
} from '../post/postTypes';
import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENTS,
  VOTE_COMMENT
} from '../comment/commentTypes';
import { FETCH_CATEGORIES } from '../category/categoryType';

export default function notification(state = {}, action) {
  switch (action.type) {
    case ADD_POST.SUCCESS:
    case UPDATE_POST.SUCCESS:
    case VOTE_POST.SUCCESS:
    case FECTH_POST.SUCCESS:
    case ADD_COMMENT.SUCCESS:
    case UPDATE_COMMENT.SUCCESS:
    case FETCH_COMMENTS.SUCCESS:
    case VOTE_COMMENT.SUCCESS:
    case FETCH_CATEGORIES.SUCCESS:
      return {
        type: 'success',
        message: 'Register save!',
        time: new Date()
      };
    case DELETE_POST.SUCCESS:
    case DELETE_COMMENT.SUCCESS:
      return {
        type: 'success',
        message: 'Register delete',
        time: new Date()
      };
    case FECTH_POSTS.ERROR:
    case ADD_POST.ERROR:
    case UPDATE_POST.ERROR:
    case VOTE_POST.ERROR:
    case FECTH_POST.ERROR:
    case DELETE_POST.ERROR:
    case ADD_COMMENT.ERROR:
    case UPDATE_COMMENT.ERROR:
    case DELETE_COMMENT.ERROR:
    case FETCH_COMMENTS.ERROR:
    case VOTE_COMMENT.ERROR:
    case FETCH_CATEGORIES.ERROR:
      return {
        type: 'success',
        message: action.payload.error,
        time: new Date()
      };
    default:
      return state;
  }
}
