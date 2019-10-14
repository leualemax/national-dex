import ActionTypes from "src/actions/dex.actions.type";
import Evolutions from 'src/mocks/evolutions.json';
import List from 'src/mocks/list.json';
import Missingno from 'src/mocks/missingno.json';
import Move from 'src/mocks/move.json';
import Type from 'src/mocks/type.json';
import Types from 'src/mocks/types.json';
import { DexInternalReducer, DexReducer } from './dex.reducer'

describe('Dex reducer', () => {
  
  it('should return the initial state', () => {
    const dexReducer = DexInternalReducer(undefined, "");
    expect(DexReducer({
      dex: dexReducer
    }, {
      type: ""
    })).toEqual({
      dex: {
        selected: Missingno,
        list: []
      }
    })
  })

  it('should call fetch pokemon with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_POKEMON,
      payload: {
        status: 200,
        data: Missingno
      }
    })).toEqual({
      selected: Missingno,
      list: []
    })
  })

  it('should call fetch pokemons with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_POKEMONS,
      payload: {
        status: 200,
        data: List
      }
    })).toEqual({
      selected: Missingno,
      list: List.results,
      cachedList: List.results
    })
  })

  it('should call fetch species with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_SPECIES,
      payload: {
        status: 200,
        data: Missingno.species
      }
    })).toEqual({
      list: [],
      selected: {
        ...Missingno,
        description: "日なたで　昼寝を　する　姿を　見かける。↵太陽の　光を　いっぱい　浴びることで↵背中の　タネが　大きく　育つのだ。"
      }
    })
  })

  it('should call fetch evolutions with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_EVOLUTIONS,
      payload: {
        status: 200,
        data: Evolutions
      }
    })).toEqual({
      list: [],
      selected: {
        ...Missingno,
        evolutions: Evolutions.chain
      }
    })
  })

  it('should call fetch list of pokemon from type with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_TYPES,
      payload: {
        status: 200,
        data: Type
      }
    })).toEqual({
      list: Type.pokemon.map(e => e.pokemon),
      types: undefined,
      selected: {
        ...Missingno
      }
    })
  })


  it('should call fetch empty list of pokemon from type with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_TYPES,
      payload: {
        status: 200,
        data: {
          pokemon: undefined
        }
      }
    })).toEqual({
      list: [],
      types: undefined,
      selected: {
        ...Missingno
      }
    })
  })

  it('should call fetch types a type with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_TYPES,
      payload: {
        status: 200,
        data: Types
      }
    })).toEqual({
      list: [],
      types: Types.results,
      selected: {
        ...Missingno
      }
    })
  })

  it('should call fetch move with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_MOVE,
      payload: {
        status: 200,
        data: Move
      }
    })).toEqual({
      list: [],
      selected: Missingno,
      showShortEffect: "Has a 10 chance to burn the target."
    })
  })

  it('should call filter pokemon and find bulbaaur', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      list: List.results,
      cachedList: List.results,
      showShortEffect: ''
      }, {
        type: ActionTypes.FILTER_POKEMONS,
        payload: "bulbasaur"
    })).toEqual({
      list: [
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/",
        }
      ],
      cachedList: List.results,
      selected: Missingno,
      showShortEffect: ""
    })
  })

  it('should call filter pokemon and find nothing', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      list: List.results,
      cachedList: List.results,
      showShortEffect: ''
      }, {
        type: ActionTypes.FILTER_POKEMONS,
        payload: "missingno"
    })).toEqual({
      list: [],
      cachedList: List.results,
      selected: Missingno,
      showShortEffect: ""
    })
  })

  it('should call filter pokemon without cachedList and change nothing', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      list: List.results,
      showShortEffect: ''
      }, {
        type: ActionTypes.FILTER_POKEMONS,
        payload: "missingno"
    })).toEqual({
      list: List.results,
      selected: Missingno,
      showShortEffect: ""
    })
  })

  it('should call fetch move with 200 and no effect', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_MOVE,
      payload: {
        status: 200,
        data: {
          effect_entries: []
        }
      }
    })).toEqual({
      list: [],
      selected: Missingno,
      showShortEffect: ""
    })
  })

  it('should call fetch pokemon with 404', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      list: [],
      showShortEffect: ''
    }, {
      type: ActionTypes.FETCH_POKEMON,
      payload: {
        status: 404
      }
    })).toEqual({
      selected: Missingno,
      list: [],
      showShortEffect: ''
    })
  })

  it('should call fetch pokemons with 404', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      list: [],
      showShortEffect: ''
    }, {
      type: ActionTypes.FETCH_POKEMONS,
      payload: {
        status: 404
      }
    })).toEqual({
      selected: Missingno,
      list: [],
      showShortEffect: ''
    })
  })

  it('should call fetch types with 404', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      list: [],
      showShortEffect: ''
    }, {
      type: ActionTypes.FETCH_TYPES,
      payload: {
        status: 404
      }
    })).toEqual({
      selected: Missingno,
      list: [],
      showShortEffect: ''
    })
  })

  it('should call fetch move with 404', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      list: [],
      showShortEffect: ''
    }, {
      type: ActionTypes.FETCH_MOVE,
      payload: {
        status: 404
      }
    })).toEqual({
      selected: Missingno,
      list: [],
      showShortEffect: ''
    })
  })

  it('should call evolutions move with 404', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_EVOLUTIONS,
      payload: {
        status: 404
      }
    })).toEqual({
      list: [],
      selected: Missingno
    })
  })

  it('should call species move with 404', () => {
    expect(DexInternalReducer(undefined, {
      type: ActionTypes.FETCH_SPECIES,
      payload: {
        status: 404
      }
    })).toEqual({
      list: [],
      selected: Missingno
    })
  })

  it('should call clean move and clean the effect', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      list: [],
      showShortEffect: 'test'
    }, {
      type: ActionTypes.CLEAN_MOVE
    })).toEqual({
      selected: Missingno,
      list: [],
      showShortEffect: ''
    })
  })
})