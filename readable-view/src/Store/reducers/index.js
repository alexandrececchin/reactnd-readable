import { combineReducers } from "redux";
import posts from "../reducers/post";
import comments from "../reducers/comment";
import categories from "../reducers/category";

export default combineReducers({ posts, comments, categories });