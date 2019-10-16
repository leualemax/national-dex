import { applyMiddleware, Store, createStore, combineReducers } from 'redux';
import * as PokemonTypes from './pokemon/types';
import * as DexTypes from './dex/types';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import pokemon from './pokemon/reducer';

import dex from './dex/reducer';


const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
  pokemon,
  dex
})

export interface AppStates {
  pokemon: PokemonTypes.State,
  dex: DexTypes.State
}

const store: Store<AppStates> = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;