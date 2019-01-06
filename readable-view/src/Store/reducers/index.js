import { combineReducers } from "redux";
import post from "../reducers/post";
import comment from "../reducers/comment";
import category from "../reducers/category";

export default combineReducers({ post, comment, category });