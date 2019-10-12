import PokemonService from 'src/services/pokemon.service';
import * as PokemonActions from './pokemon.actions';

describe('Pokemon Actions', () => {
  
  it('should return the initial state', () => {
    const pokemonReducer = PokemonActions.fetchPokemon(0);
    
    expect(pokemonReducer).toEqual({
        payload: PokemonService.fetch(0),
        type: "FETCH_POKEMON"
    })
  })
})