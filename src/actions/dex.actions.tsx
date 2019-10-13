import PokemonService from "../services/pokemon.service";

export const fetchEvolutions = (url: string) => { 
    return async (dispatch:any) => { 
        try {
            const payload:any = await PokemonService.evolutions(url);
            dispatch({ type: 'FETCH_EVOLUTIONS', payload });
        }
        catch (e) {
            dispatch({ type: 'FETCH_EVOLUTIONS_ERROR' });
        }
    }
}

export const fetchSpecies = (url: string) => {
    return async (dispatch:any) => { 
        try {
            const payload:any = await PokemonService.specie(url);

            dispatch({ type: 'FETCH_SPECIES', payload });

            fetchEvolutions(payload.data.evolution_chain.url)(dispatch);
        }
        catch (e) {
            dispatch({ type: 'FETCH_SPECIES_ERROR' });
        }
    }
}


export const fetchPokemon = (id: number) => {
    return async (dispatch:any) => {
        try {
            const payload:any = await PokemonService.fetch(id);

            dispatch({ type: 'FETCH_POKEMON', payload });

            fetchSpecies(payload.data.species.url)(dispatch);
        }
        catch (e) {
            dispatch({ type: 'FETCH_POKEMON_ERROR' });
        }
    }
};

export const fetchMove = (url?: string) => {
    if(url) {
        const request = PokemonService.move(url);
        return {
            payload: request,
            type: "FETCH_MOVE"
        };
    } else {
        return {
            type: "CLEAN_MOVE"
        };
    }
};
