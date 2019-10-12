import * as Missingno from 'src/mocks/missingno.json';
import PokemonService from './pokemon.service';

describe('Pokemon Service', () => {
  
  it('should call pokemonapi', (done) => {
    PokemonService.fetch(0).then(response => {
        expect(response.data).toEqual(Missingno);
        done();
    });
  })
})