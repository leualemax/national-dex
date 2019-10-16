import { call, put } from 'redux-saga/effects';
import PokeApi from '../../services/pokeapi.service'

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const payload = yield call(PokeApi.basedGet, "pokemon/?limit=1000");

    yield put(loadSuccess(payload.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
