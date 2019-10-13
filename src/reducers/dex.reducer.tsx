import { combineReducers } from "redux";
import Missingno from 'src/mocks/missingno.json';
import IDex from 'src/models/dex.model';

export function DexInternalReducer(
  state: IDex = {
    selected: Missingno,
  },
  action: any
) {
  switch (action.type) { 
    case "FETCH_POKEMON":
      if (action.payload.status === 200) {
        return {
          ...state,
          selected: action.payload.data
        };
      } else {
        return state;
      }
    case "FETCH_MOVE":
        if (action.payload.status === 200) {
          const chance = action.payload.data.effect_chance;
          const entrie = action.payload.data.effect_entries[0] || {short_effect: ""}
          const effect = entrie.short_effect.replace("$effect_chance%", chance);
          return {
            ...state,
            showShortEffect: effect
          };
        } else {
          return state;
        }
    case "FETCH_EVOLUTIONS":
        if (action.payload.status === 200) {
          return {
            ...state,
            selected: {
              ...state.selected,
              evolutions: action.payload.data.chain
            }
          };
        } else {
          return state;
        }
    case "FETCH_SPECIES":
        if (action.payload.status === 200) {
          const species = action.payload.data;
          const enText = species.flavor_text_entries.filter((entrie:any) => {
              return (entrie && entrie.language.name === "en")
          })

          return {
            ...state,
            selected: {
              ...state.selected,
              species,
              description: enText[0].flavor_text
            }
          }
        } else {
          return state;
        }
    case "CLEAN_MOVE":
        return {
          ...state,
          showShortEffect: ""
        };
    // eslint-disable-next-line
    default:
      return state
  }
}

export const DexReducer = combineReducers({
  dex: DexInternalReducer as any
});
