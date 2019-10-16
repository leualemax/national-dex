import { all, takeLatest } from 'redux-saga/effects';

import * as PokemonTypes from 'src/store/pokemon/types';
import * as DexTypes from 'src/store/dex/types';
import * as PokemonSagas from './pokemon/sagas';
import * as DexSagas from './dex/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(PokemonTypes.ActionTypes.GET_REQUEST, PokemonSagas.get),
    takeLatest(DexTypes.ActionTypes.LOAD_REQUEST, DexSagas.load),
  ]);
}