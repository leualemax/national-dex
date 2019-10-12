import Missingno from 'src/mocks/missingno.json';
import { DexReducer } from './dex.reducer'
import { PokemonReducer } from './pokemon.reducer';

describe('Dex reducer', () => {
  
  it('should return the initial state', () => {
    const pokemonReducer = PokemonReducer(undefined, "");
    expect(DexReducer({
      pokemon: pokemonReducer
    }, {
      type: ""
    })).toEqual({
      pokemon: Missingno
    })
  })

})