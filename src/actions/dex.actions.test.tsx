import PokemonService from 'src/services/pokemon.service';
import * as DexActions from './dex.actions';

describe('Dex Actions', () => {
  it('should execute fetch evolutions', async () => {
    const dispache = jest.fn();
    expect(dispache).toHaveBeenCalledTimes(0);
    await DexActions.fetchEvolutions('https://pokeapi.co/api/v2/evolution-chain/1')(dispache);
    const first = dispache.mock.calls[0][0];
    await expect(first.type).toStrictEqual('FETCH_EVOLUTIONS');
  });

  it('should execute fetch evolutions 404', async () => {
    const dispache = jest.fn();
    expect(dispache).toHaveBeenCalledTimes(0);
    await DexActions.fetchEvolutions('https://pokeapi.co/api/v2/evolution-chain/404')(dispache);
    const first = dispache.mock.calls[0][0];
    await expect(first.type).toStrictEqual('FETCH_EVOLUTIONS_ERROR');
  });

  it('should execute fetch species', async () => {
    const dispache = jest.fn();
    expect(dispache).toHaveBeenCalledTimes(0);
    await DexActions.fetchSpecies('https://pokeapi.co/api/v2/pokemon-species/133')(dispache);
    const first = dispache.mock.calls[0][0];
    await expect(first.type).toStrictEqual('FETCH_SPECIES');
  });

  it('should execute fetch pokemon and get a 404', async () => {
    const dispache = jest.fn();
    expect(dispache).toHaveBeenCalledTimes(0);
    await DexActions.fetchSpecies('https://pokeapi.co/api/v2/pokemon-species/404')(dispache);
    const first = dispache.mock.calls[0][0];
    await expect(first.type).toStrictEqual('FETCH_SPECIES_ERROR');
  });


  it('should execute fetch pokemon', async () => {
    const dispache = jest.fn();
    expect(dispache).toHaveBeenCalledTimes(0);
    await DexActions.fetchPokemon(0)(dispache);
    const first = dispache.mock.calls[0][0];
    await expect(first.type).toStrictEqual('FETCH_POKEMON');
  });

  it('should execute fetch pokemon and get a 404', async () => {
    const dispache = jest.fn();
    await DexActions.fetchPokemon(404)(dispache);
    const first = dispache.mock.calls[0][0];
    expect(first.type).toStrictEqual('FETCH_POKEMON_ERROR');
    expect(first.payload).toBeUndefined();
  });

  it('should execute fetch move', () => {
    const pokemonReducer = DexActions.fetchMove("https://pokeapi.co/api/v2/move/0");
    
    expect(pokemonReducer).toEqual({
        payload: PokemonService.move("https://pokeapi.co/api/v2/move/0"),
        type: "FETCH_MOVE"
    })
  });

  it('should execute fetch move without url', () => {
    const pokemonReducer = DexActions.fetchMove();
    
    expect(pokemonReducer).toEqual({
        type: "CLEAN_MOVE"
    })
  });
})