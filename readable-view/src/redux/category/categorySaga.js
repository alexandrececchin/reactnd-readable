import { call, put } from 'redux-saga/effects';
import api from '../../service/service';

import { Creators as CategoriesActions } from './categoryActions';

export function* fetchCategories() {
  try {
    const response = yield call(api.get, '/categories');

    yield put(
      CategoriesActions.fetchCategoriesSuccess(response.data.categories),
    );
  } catch (err) {
    yield put(
      CategoriesActions.fetchCategoriesError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  }
}
