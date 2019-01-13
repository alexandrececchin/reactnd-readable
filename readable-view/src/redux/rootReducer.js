import { combineReducers } from "redux";
import posts from "./posts/reducer";
import comments from "./comment/reducer";
import categories from "./category/reducer";

export default combineReducers({ posts, comments, categories });