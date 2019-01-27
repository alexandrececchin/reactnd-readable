import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import api from '../../service/service';
import { comment } from './commentSchema';
import { Creators as CommentsActions } from '../comment/commentActions';

export function* fetchComments(action) {
    const { postId } = action.payload;

    try {
        const response = yield call(api.get, `/posts/${postId}/comments`);

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
        const response = yield call(api.post, `/comments/${commentId}`, { option });
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

export function* addComment(action) {
    const { parentId } = action.payload;

    try {
        const response = yield call(api.post, '/comments', { ...action.payload });
        console.log(normalize(response.data, comment));

        yield put(
            CommentsActions.addCommentSuccess(
                normalize(response.data, comment),
                parentId,
            ),
        );
    } catch (err) {
        yield put(
            CommentsActions.addCommentError(
                'An error has occurred. Please, refresh the page.',
            ),
        );
    }
}

export function* updateComment(action) {
    const { body, timestamp, commentId, postId } = action.payload;
    const params = {
        body,
        timestamp,
    };

    try {
        const response = yield call(api.put, `/comments/${commentId}`, {
            ...params,
        });

        console.log(normalize(response.data, comment), postId);

        yield put(
            CommentsActions.updateCommentSuccess(
                normalize(response.data, comment),
                postId,
            ),
        );
    } catch (err) {
        yield put(
            CommentsActions.updateCommentError(
                'An error has occurred. Please, refresh the page.',
            ),
        );
    }
}

export function* deleteComment(action) {
    const { commentId, postId } = action.payload;

    try {
        const response = yield call(api.delete, `/comments/${commentId}`);

        yield put(
            CommentsActions.deleteCommentSuccess(
                normalize(response.data, comment),
                postId,
            ),
        );
    } catch (err) {
        yield put(
            CommentsActions.deleteCommentError(
                'An error has occurred. Please, refresh the page.',
            ),
        );
    }
}

