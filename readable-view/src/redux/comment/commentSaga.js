import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import api from '../../service/service';
import { comment } from './commentSchema';
import { Creators as CommentsActions } from '../comment/commentActions';

export function* retrieveComments(action) {
    const { postId } = action.payload;

    try {
        const response = yield call(api.get, `/posts/${postId}/comments`);
        console.log(response.data);
        console.log(normalize(response.data, [comment]));

        yield put(
            CommentsActions.retrieveCommentsSuccess(
                normalize(response.data, [comment]),
                postId,
            ),
        );
    } catch (err) {
        yield put(
            CommentsActions.retrieveCommentsError(
                'An error has occurred. Please, refresh the page.',
            ),
        );
    }
}
