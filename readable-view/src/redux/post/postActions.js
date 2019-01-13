import * as Types from "./postTypes";

export const Creators = {
    fetchSinglePostRequest: (id, category) => ({
        type: Types.FECTH_POST.REQUEST,
        payload: { id, category },
    }),
    fetchSinglePostSuccess: (data, category) => ({
        type: Types.FECTH_POST.SUCCESS,
        payload: { data, category },
    }),
    fetchSinglePostError: error => ({
        type: Types.FECTH_POST.ERROR,
        payload: { error },
    }),
    fetchPostsRequest: category => ({
        type: Types.FECTH_POSTS_REQUEST,
        payload: { category },
    }),
    fetchPostsSuccess: (data, category) => ({
        type: Types.FECTH_POSTS_SUCCESS,
        payload: { data, category },
    }),
    fetchPostsError: error => ({
        type: Types.FECTH_POSTS.ERROR,
        payload: { error },
    }),
    voteInPostRequest: (postId, option) => ({
        type: Types.VOTE_POST_REQUEST,
        payload: { postId, option },
    }),
    voteInPostSuccess: (data, postId) => ({
        type: Types.VOTE_POST_SUCCESS,
        payload: { data, postId },
    }),
    voteInPostError: error => ({
        type: Types.VOTE_POST.ERROR,
        payload: { error },
    }),
    addPostRequest: post => ({
        type: Types.ADD_POST_REQUEST,
        payload: { ...post },
    }),
    addPostSuccess: (data, category) => ({
        type: Types.ADD_POST_SUCCESS,
        payload: { data, category },
    }),
    addPostError: error => ({
        type: Types.ADD_POST.ERROR,
        payload: { error },
    }),
    editPostRequest: (post, postId) => ({
        type: Types.EDIT_POST_REQUEST,
        payload: { ...post, postId },
    }),
    editPostSuccess: (data, category) => ({
        type: Types.EDIT_POST_SUCCESS,
        payload: { data, category },
    }),
    editPostError: error => ({
        type: Types.EDIT_POST.ERROR,
        payload: { error },
    }),
    deletePostRequest: postId => ({
        type: Types.DELETE_POST_REQUEST,
        payload: { postId },
    }),
    deletePostSuccess: data => ({
        type: Types.DELETE_POST_SUCCESS,
        payload: { data },
    }),
    deletePostError: error => ({
        type: Types.DELETE_POST.ERROR,
        payload: { error },
    }),
};
