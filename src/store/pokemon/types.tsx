
import * as PokeApiTypes from "src/services/pokeapi.types";

export enum ActionTypes {
  GET_REQUEST = '@pokemon/GET_REQUEST',
  GET_SUCCCES = '@pokemon/GET_SUCCCES',
  GET_FAILURE = '@pokemon/GET_FAILURE'
}


export interface Data {
  readonly pokemon: PokeApiTypes.Pokemon
  readonly species: PokeApiTypes.Species
  readonly evolutions: PokeApiTypes.Evolution
}

export interface State {
  readonly data?: Data,
  readonly loading: boolean
  readonly error: boolean
}