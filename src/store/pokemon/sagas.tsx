import { call, put } from 'redux-saga/effects';
import PokeApi from '../../services/pokeapi.service'

import { getSuccess, getFailure } from './actions';

export function* get(action: any) {
  const id: number = action.payload
  try {
    const pokemon = yield call(PokeApi.basedGet, `pokemon/${id}`);

    const species = yield call(PokeApi.get, pokemon.data.species.url);

    const evolutions = yield call(PokeApi.get, species.data.evolution_chain.url);

    yield put(getSuccess(
      { pokemon: pokemon.data, species: species.data, evolutions: evolutions.data }
    ));
  } catch (err) {
    yield put(getFailure());
  }
}
