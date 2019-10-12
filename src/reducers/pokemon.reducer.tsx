import Missingno from 'src/mocks/missingno.json';
import IPokemon from "../models/pokemon.model";

export function PokemonReducer(
  state: IPokemon = Missingno,
  action: any
) {
  switch (action.type) {
    
    case "FETCH_POKEMON":
      if (action.payload.status === 200) {
        return {
          ...action.payload.data
        };
      }
    // eslint-disable-next-line
    default:
      return state
  }
}
