import Move from 'src/mocks/move.json';
import Evolutions from 'src/mocks/evolutions.json';
import Missingno from 'src/mocks/missingno.json';
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
        selected: Missingno
      }
    })
  })

  it('should call fetch pokemon with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: "FETCH_POKEMON",
      payload: {
        status: 200,
        data: Missingno
      }
    })).toEqual({
      selected: Missingno
    })
  })

  it('should call fetch species with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: "FETCH_SPECIES",
      payload: {
        status: 200,
        data: Missingno.species
      }
    })).toEqual({
      selected: {
        ...Missingno,
        description: "日なたで　昼寝を　する　姿を　見かける。↵太陽の　光を　いっぱい　浴びることで↵背中の　タネが　大きく　育つのだ。"
      }
    })
  })

  it('should call fetch evolutions with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: "FETCH_EVOLUTIONS",
      payload: {
        status: 200,
        data: Evolutions
      }
    })).toEqual({
      selected: {
        ...Missingno,
        evolutions: Evolutions.chain
      }
    })
  })

  it('should call fetch move with 200', () => {
    expect(DexInternalReducer(undefined, {
      type: "FETCH_MOVE",
      payload: {
        status: 200,
        data: Move
      }
    })).toEqual({
      selected: Missingno,
      showShortEffect: "Has a 10 chance to burn the target."
    })
  })

  it('should call fetch move with 200 and no effect', () => {
    expect(DexInternalReducer(undefined, {
      type: "FETCH_MOVE",
      payload: {
        status: 200,
        data: {
          effect_entries: []
        }
      }
    })).toEqual({
      selected: Missingno,
      showShortEffect: ""
    })
  })

  it('should call fetch pokemon with 404', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      showShortEffect: ''
    }, {
      type: "FETCH_POKEMON",
      payload: {
        status: 404
      }
    })).toEqual({
      selected: Missingno,
      showShortEffect: ''
    })
  })

  it('should call fetch move with 404', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      showShortEffect: ''
    }, {
      type: "FETCH_MOVE",
      payload: {
        status: 404
      }
    })).toEqual({
      selected: Missingno,
      showShortEffect: ''
    })
  })

  it('should call evolutions move with 404', () => {
    expect(DexInternalReducer(undefined, {
      type: "FETCH_EVOLUTIONS",
      payload: {
        status: 404
      }
    })).toEqual({
      selected: Missingno
    })
  })

  it('should call species move with 404', () => {
    expect(DexInternalReducer(undefined, {
      type: "FETCH_SPECIES",
      payload: {
        status: 404
      }
    })).toEqual({
      selected: Missingno
    })
  })

  it('should call clean move and clean the effect', () => {
    expect(DexInternalReducer({
      selected: Missingno,
      showShortEffect: 'test'
    }, {
      type: "CLEAN_MOVE"
    })).toEqual({
      selected: Missingno,
      showShortEffect: ''
    })
  })
})