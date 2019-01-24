import * as Types from './commentTypes';

export const Creators = {
    fetchCommentsRequest: postId => ({
        type: Types.FETCH_COMMENTS.REQUEST,
        payload: { postId },
      }),
      fetchCommentsSuccess: (data) => ({
        type: Types.FETCH_COMMENTS.SUCCESS,
        payload: { data },
      }),
      fetchCommentsError: error => ({
        type: Types.FETCH_COMMENTS.ERROR,
        payload: { error },
      }),
}