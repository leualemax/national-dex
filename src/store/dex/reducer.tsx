
import { Reducer } from 'redux';
import { ActionTypes, State } from './types';
import { BaseObject } from 'src/services/pokeapi.types';

const INITIAL_STATE: State = {
  error: false,
  loading: false,
};

const extractIdFromBaseUrl = (base: BaseObject) => {
  const hash = base.url.split("/");
  return {
    ...base,
    id: parseInt(hash[hash.length - 2], 10)
  }
}

const reducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.LOAD_SUCCCES:
      return {
        ...state, loading: false, error: false, data: {
          ...action.payload,
          results: action.payload.results.map((item: BaseObject) => extractIdFromBaseUrl(item))
        }
      };
    case ActionTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: undefined,
      };
    default:
      return state;
  }
};

export default reducer;