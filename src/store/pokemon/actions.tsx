import { action } from 'typesafe-actions';
import { ActionTypes } from './types';
import * as PokemonTypes from "src/store/pokemon/types";

export const getRequest = (id: number) => action(ActionTypes.GET_REQUEST, id);

export const getSuccess = (data: PokemonTypes.Data) => action(ActionTypes.GET_SUCCCES, data);

export const getFailure = () => action(ActionTypes.GET_FAILURE);