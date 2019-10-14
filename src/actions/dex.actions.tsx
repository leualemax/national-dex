import ActionTypes from "src/actions/dex.actions.type";
import PokemonService from "../services/pokemon.service";

export const fetchEvolutions = (url: string) => { 
    return async (dispatch:any) => { 
        try {
            const payload:any = await PokemonService.get(url);

            dispatch({ type: ActionTypes.FETCH_EVOLUTIONS, payload });
        }
        catch (e) {
            dispatch({ type: ActionTypes.FETCH_EVOLUTIONS_ERROR });
        }
    }
}

export const fetchSpecies = (url: string) => {
    return async (dispatch:any) => { 
        try {
            const payload:any = await PokemonService.get(url);

            dispatch({ type: ActionTypes.FETCH_SPECIES, payload });

            fetchEvolutions(payload.data.evolution_chain.url)(dispatch);
        }
        catch (e) {
            dispatch({ type: ActionTypes.FETCH_SPECIES_ERROR });
        }
    }
}

export const fetchPokemon = (url: string) => {
    return async (dispatch:any) => {
        try {
            const payload:any = await PokemonService.get(url);

            dispatch({ type: ActionTypes.FETCH_POKEMON, payload });

            fetchSpecies(payload.data.species.url)(dispatch);
        }
        catch (e) {
            dispatch({ type: ActionTypes.FETCH_POKEMON_ERROR });
        }
    }
};

export const filterPokemons = (query: string) => {
    return { type: ActionTypes.FILTER_POKEMONS, payload: query };
};

export const fetchPokemons = () => {
    return async (dispatch:any) => {
        const payload:any = await PokemonService.pokemon()
        
        dispatch({ type: ActionTypes.FETCH_POKEMONS, payload });
    }
};

export const fetchTypes = (type?: string) => {
    return async (dispatch:any) => {
        try {
            const payload:any = await PokemonService.type(type)
            dispatch({ type: ActionTypes.FETCH_TYPES, payload });
        }
        catch (e) {
            dispatch({ type: ActionTypes.FETCH_TYPES_ERROR });
        }
    }
};


export const selectPokemonByName = (name: string) => {
    return async (dispatch:any) => {
        const payload:any = await PokemonService.byName(name);
        
        dispatch({ type: ActionTypes.FETCH_POKEMON, payload });

        fetchSpecies(payload.data.species.url)(dispatch);
    }
};


export const fetchMove = (url?: string) => {
    if(url) {
        const request = PokemonService.get(url);
        return {
            payload: request,
            type: ActionTypes.FETCH_MOVE
        };
    } else {
        return {
            type: ActionTypes.CLEAN_MOVE
        };
    }
};
