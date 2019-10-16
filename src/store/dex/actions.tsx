import { action } from 'typesafe-actions';
import { ActionTypes } from './types';
import * as PokeApiTypes from "src/services/pokeapi.types";

export const loadRequest = () => action(ActionTypes.LOAD_REQUEST);

export const loadSuccess = (data: PokeApiTypes.List) => action(ActionTypes.LOAD_SUCCCES, data);

export const loadFailure = () => action(ActionTypes.LOAD_FAILURE);