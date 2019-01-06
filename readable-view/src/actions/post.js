import * as constants from '../Util/constant';
import * as api from '../service/service';

export function receivePosts(posts) {
    return {
        type: constants.RECEIVE_POSTS,
        posts
    }
}

function addPost(post) {
    return {
        type: constants.ADD_POST,
        post
    }
}

function updatePost(post) {
    return {
        type: constants.UPDATE_POST,
        post
    }
}

function deletePost(id) {
    return {
        type: constants.DELETE_POST,
        id
    }
}

export function handleAddPost(post) {
    return (dispatch) => {
        return api.savePost(post).then((post) => dispatch(addPost(post)))
    }
}

export function handleUpdatePost(post) {
    return (dispatch) => {
        return api.savePost(post).then((post) => dispatch(updatePost(post)))
    }
}

export function handleDeletePost(postId) {
    return (dispatch) => {
        return api.deletePostById(postId).then((id) => dispatch(deletePost(id)))
    }
}