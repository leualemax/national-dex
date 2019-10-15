import ActionTypes from "src/actions/dex.actions.type";
import PokeApi from "../services/pokemon.service";

export const fetchEvolutions = (url: string) => {
	return async (dispatch: any) => {
		try {
			const payload: any = await PokeApi.get(url);

			dispatch({ type: ActionTypes.FETCH_EVOLUTIONS, payload });
		} catch (e) {
			dispatch({ type: ActionTypes.FETCH_EVOLUTIONS_ERROR });
		}
	};
};

export const fetchSpecies = (url: string) => {
	return async (dispatch: any) => {
		try {
			const payload: any = await PokeApi.get(url);

			dispatch({ type: ActionTypes.FETCH_SPECIES, payload });

			fetchEvolutions(payload.data.evolution_chain.url)(dispatch);
		} catch (e) {
			dispatch({ type: ActionTypes.FETCH_SPECIES_ERROR });
		}
	};
};

export const fetchPokemon = (url: string) => {
	return async (dispatch: any) => {
		try {
			const payload: any = await PokeApi.get(url);

			dispatch({ type: ActionTypes.FETCH_POKEMON, payload });

			fetchSpecies(payload.data.species.url)(dispatch);
		} catch (e) {
			dispatch({ type: ActionTypes.FETCH_POKEMON_ERROR });
		}
	};
};

export const filterPokemons = (query: string) => {
	return { type: ActionTypes.FILTER_POKEMONS, payload: query };
};

export const fetchPokemons = () => {
	return async (dispatch: any) => {
		const payload: any = await PokeApi.pokemon();

		dispatch({ type: ActionTypes.FETCH_POKEMONS, payload });
	};
};

export const fetchTypes = (type?: string) => {
	return async (dispatch: any) => {
		try {
			let payload: any;
			if (type) {
				payload = await PokeApi.type().find_by_name(type);
			} else {
				payload = await PokeApi.type().all(200);
			}
			dispatch({ type: ActionTypes.FETCH_TYPES, payload });
		} catch (e) {
			dispatch({ type: ActionTypes.FETCH_TYPES_ERROR });
		}
	};
};

export const selectPokemonByName = (name: string) => {
	return async (dispatch: any) => {
		const payload: any = await PokeApi.pokemon().find_by_name(name);

		dispatch({ type: ActionTypes.FETCH_POKEMON, payload });

		fetchSpecies(payload.data.species.url)(dispatch);
	};
};

export const fetchMove = (url?: string) => {
	if (url) {
		const request = PokeApi.get(url);
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
