import _ from 'lodash';
import { FECTH_POSTS, ADD_POST, UPDATE_POST, DELETE_POST, VOTE_POST, FECTH_POST } from "./postTypes";

export default function posts(state = {}, action) {
    switch (action.type) {
        case FECTH_POSTS.SUCCESS:
            return { ...action.payload.data.entities.posts };
        case FECTH_POST.SUCCESS:
        case ADD_POST.SUCCESS:
        case VOTE_POST.SUCCESS:
        case UPDATE_POST.SUCCESS:
            const { post } = action;
            return {
                ...state,
                [action.post.id]: post
            }
        case DELETE_POST.SUCCESS:
            const { id } = action.id;
            const posts = state.filter(post => post.id !== id);

            return { ...state, posts }

        default:
            return state;
    }
}


export const Selectors = {
    getActivePosts: (state, category, sortBy, orderBy) => {

        let activePosts = state.filter(post => !post.deleted)

        if(category){
            activePosts = state.filter(post => post.category === category)
        }

        if (sortBy && orderBy) {
            activePosts = _.orderBy(activePosts, [sortBy], [orderBy]);
        }

        activePosts = activePosts.filter(post => !post.deleted);

        return activePosts;
    },
    getSinglePost: (state, id) => state[id],
};