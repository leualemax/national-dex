import Missingno from 'src/mocks/missingno.json';
import {PokemonReducer} from './pokemon.reducer';

describe('Pokemon reducer', () => {
  it('should return the initial state', () => {
    expect(PokemonReducer(undefined, "")).toEqual(Missingno)
  })

  it('should call fetch pokemon with 200', () => {
    expect(PokemonReducer(undefined, {
      type: "FETCH_POKEMON",
      payload: {
        status: 200,
        data: Missingno
      }
    })).toEqual(Missingno)
  })

  it('should call fetch pokemon with 404', () => {
    expect(PokemonReducer(undefined, {
      type: "FETCH_POKEMON",
      payload: {
        status: 404
      }
    })).toEqual(Missingno)
  })
})