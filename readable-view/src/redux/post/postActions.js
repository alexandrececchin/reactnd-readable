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
        type: Types.FECTH_POSTS.REQUEST,
        payload: { category },
    }),
    fetchPostsSuccess: (data, category) => ({
        type: Types.FECTH_POSTS.SUCCESS,
        payload: { data, category },
    }),
    fetchPostsError: error => ({
        type: Types.FECTH_POSTS.ERROR,
        payload: { error },
    }),
    registerPostVotetRequest: (postId, option) => ({
        type: Types.VOTE_POST.REQUEST,
        payload: { postId, option },
    }),
    registerPostVoteSuccess: (data, postId) => ({
        type: Types.VOTE_POST.SUCCESS,
        payload: { data, postId },
    }),
    registerPostVoteError: error => ({
        type: Types.VOTE_POST.ERROR,
        payload: { error },
    }),
    addPostRequest: post => ({
        type: Types.ADD_POST.REQUEST,
        payload: { post },
    }),
    addPostSuccess: (data) => ({
        type: Types.ADD_POST.SUCCESS,
        payload: { data },
    }),
    addPostError: error => ({
        type: Types.ADD_POST.ERROR,
        payload: { error },
    }),
    updatePostRequest: (post, postId) => ({
        type: Types.UPDATE_POST.REQUEST,
        payload: { ...post, postId },
    }),
    updatePostSuccess: (data, category) => ({
        type: Types.UPDATE_POST.SUCCESS,
        payload: { data, category },
    }),
    updatePostError: error => ({
        type: Types.UPDATE_POST.ERROR,
        payload: { error },
    }),
    deletePostRequest: postId => ({
        type: Types.DELETE_POST.REQUEST,
        payload: { postId },
    }),
    deletePostSuccess: data => ({
        type: Types.DELETE_POST.SUCCESS,
        payload: { data },
    }),
    deletePostError: error => ({
        type: Types.DELETE_POST.ERROR,
        payload: { error },
    }),
};
