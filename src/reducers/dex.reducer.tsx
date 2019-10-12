import { combineReducers } from "redux";
import { PokemonReducer } from "./pokemon.reducer";

export const DexReducer = combineReducers({
  pokemon: PokemonReducer as any
});
