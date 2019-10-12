import PokemonService from "../services/pokemon.service";

export let fetchPokemon = (id: number) => {
    const request = PokemonService.fetch(id);
    return {
        payload: request,
        type: "FETCH_POKEMON"
    };
};