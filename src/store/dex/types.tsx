
import * as PokeApiTypes from "src/services/pokeapi.types";

export enum ActionTypes {
  LOAD_REQUEST = '@dex/LOAD_REQUEST',
  LOAD_SUCCCES = '@dex/LOAD_SUCCCES',
  LOAD_FAILURE = '@dex/LOAD_FAILURE'
}

export interface State {
  readonly data?: PokeApiTypes.List,
  readonly loading: boolean
  readonly error: boolean
}