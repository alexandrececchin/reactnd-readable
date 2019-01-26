import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import api from '../../service/service';
import { comment } from './commentSchema';
import { Creators as CommentsActions } from '../comment/commentActions';

export function* fetchComments(action) {
    const { postId } = action.payload;

    try {
        const response = yield call(api.get, `/posts/${postId}/comments`);
        // console.log(response.data);
        // console.log(normalize(response.data, [comment]));

        yield put(
            CommentsActions.fetchCommentsSuccess(normalize(response.data, [comment])),
        );
    } catch (err) {
        yield put(
            CommentsActions.fec(
                'An error has occurred. Please, refresh the page.',
            ),
        );
    }
}


export function* registerCommentVote(action) {
    const { commentId, option } = action.payload;

    try {
        const response = yield call(api.post, `/comments/${commentId}`,{option});
        yield put(
            CommentsActions.registerCommentVoteSuccess(normalize(response.data, comment)),
        );
    } catch (err) {
        yield put(
            CommentsActions.registerCommentVoteError(
                'An error has occurred. Please, refresh the page.',
            ),
        );
    }
}
