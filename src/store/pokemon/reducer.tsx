
import { Reducer } from 'redux';
import { ActionTypes, State } from './types';

const INITIAL_STATE: State = {
  error: false,
  loading: false,
};

const reducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.GET_SUCCCES:
      return {
        ...state, loading: false, error: false, data: action.payload
      };
    case ActionTypes.GET_FAILURE:
      return {
        ...state, loading: false, error: true, data: undefined,
      };
    default:
      return state;
  }
};

export default reducer;