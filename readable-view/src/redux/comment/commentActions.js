import * as constants from '../../Util/constant';
import * as api from '../../service/service';
import { normalize } from 'normalizr';
import { comment as commentSchema } from "../../schema/schema";

export function receiveComments(comments) {
    return {
        type: constants.RECEIVE_COMMENTS,
        comments
    }
}

function addComment(comment) {
    return {
        type: constants.ADD_COMMENT,
        comment
    }
}

function updateComment(comment) {
    return {
        type: constants.UPDATE_COMMENT,
        comment
    }
}

function deleteComment(id) {
    return {
        type: constants.DELETE_COMMENT,
        id
    }
}

export function handleAddComment(post) {
    return (dispatch) => {
        return api.saveComment(post).then((post) => dispatch(addComment(post)))
    }
}

export function handleUpdateComment(post) {
    return (dispatch) => {
        return api.saveComment(post).then((post) => dispatch(updateComment(post)))
    }
}

export function handleDeleteComment(id) {
    return (dispatch) => {
        return api.deleteCommentById(id).then((id) => dispatch(deleteComment(id)))
    }
}

export function handleGetCommentsByPostId(postId) {
    return (dispatch) => {
        return api.getCommentsByPost(postId).then((resp) => {
            dispatch(receiveComments(normalize(resp, [commentSchema]).entities))
        })
    }
}