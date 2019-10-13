import Missingno from 'src/mocks/missingno.json';
import * as Move from 'src/mocks/move.json';
import PokemonService from './pokemon.service';

describe('Pokemon Service', () => {
  it('should call [get] pokemon', (done) => {
    PokemonService.fetch(0).then(response => {
        expect(response.data).toEqual(Missingno);
        done();
    });
  })

  it('should call [get] moves', (done) => {
    PokemonService.move("https://pokeapi.co/api/v2/move/0").then(response => {
        expect(response.data).toEqual(Move);
        done();
    });
  })
})