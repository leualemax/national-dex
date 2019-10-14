import { combineReducers } from "redux";

import ActionTypes from "src/actions/dex.actions.type";
import Missingno from 'src/mocks/missingno.json';
import IDex from 'src/models/dex.model';

export function DexInternalReducer(
  state: IDex = {
    selected: Missingno,
    list: []
  },
  action: any
) {
  switch (action.type) {
    case ActionTypes.FETCH_POKEMON:
      return handle(action,state)({
        ...state,
        selected: action.payload.data
      });
    case ActionTypes.FETCH_TYPES:
      return handle(action,state)({
          ...state,
          types: action.payload.data && action.payload.data.results ? action.payload.data.results : state.types,
          list: action.payload.data && action.payload.data.pokemon ? extract(action.payload.data.pokemon) : state.list
        });
    case ActionTypes.FETCH_POKEMONS:
      const list = action.payload.data ? action.payload.data.results : [];
      return handle(action,state)({
          ...state,
          list,
          cachedList: list
        });
    case ActionTypes.FILTER_POKEMONS:
      return filter(action.payload, state);
    case ActionTypes.FETCH_MOVE:
      return handle(action,state)({
        ...state,
        showShortEffect: moves(action.payload.data)
      });
    case ActionTypes.FETCH_EVOLUTIONS:
      return handle(action,state)({
        ...state,
          selected: {
            ...state.selected,
            evolutions: action.payload.data ? action.payload.data.chain : {}
          }
      });
    case ActionTypes.FETCH_SPECIES:
      return handle(action,state)({
        ...state,
        selected: {
          ...state.selected,
          species: action.payload.data,
          description: flavorText(action.payload.data ? action.payload.data.flavor_text_entries : [])
        }
      });
    case ActionTypes.CLEAN_MOVE:
      return {
        ...state,
        showShortEffect: ""
      }
    default:
      return state
  }
}

const handle = (action:any, state:IDex) => {
  return (dispatch:any) => {
    if (action.payload.status === 200 && action.payload.data) {
      return dispatch;
    } else {
      return state;
    }
  }
}

const filter = (query:string, state:IDex) => {
  if(state.cachedList){
    const list = state.cachedList.filter((i:any) => {
      return i.name.includes(query)
    })
    return {
      ...state,
      list
    }
  } else {
    return state
  }
}

const extract = (pokemon:any[]) => {
  return pokemon.map(e => e.pokemon)
}

const moves = (effect: { effect_chance:string,  effect_entries: any[]}) => {
  if(!effect){
    return ''
  }
  const entrie = effect.effect_entries[0] || {short_effect: ""}
  return entrie.short_effect.replace("$effect_chance%", effect.effect_chance);
}

const flavorText = (flavorTextEntries: any[]) => {
  const enText = flavorTextEntries.filter((textEntrie:any) => {
      return (textEntrie && textEntrie.language.name === "en")
  })

  return (enText.length === 0) ? '' : enText[0].flavor_text
}

export const DexReducer = combineReducers({
  dex: DexInternalReducer as any
});
