import { FECTH_POSTS, ADD_POST, UPDATE_POST, DELETE_POST, VOTE_POST, FECTH_POST } from "../post/postTypes";
import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, FETCH_COMMENTS, VOTE_COMMENT} from "../comment/commentTypes";
import { FETCH_CATEGORIES } from "../category/categoryType"

export default function isLoading(state = false, action) {
    switch (action.type) {
        case FECTH_POSTS.REQUEST:
        case ADD_POST.REQUEST:
        case UPDATE_POST.REQUEST:
        case VOTE_POST.REQUEST:
        case FECTH_POST.REQUEST:
        case DELETE_POST.REQUEST:
        case ADD_COMMENT.REQUEST:
        case UPDATE_COMMENT.REQUEST:
        case DELETE_COMMENT.REQUEST:
        case FETCH_COMMENTS.REQUEST:
        case VOTE_COMMENT.REQUEST:
        case FETCH_CATEGORIES.REQUEST:
            return true;
        default:
            return false;
    }
}