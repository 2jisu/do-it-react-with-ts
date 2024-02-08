import * as T from './types'

const initialState: T.State = {}

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@listidCardids/set':
      return {...state, [action.payload.listid]: action.payload.cardids}
    case '@listidCardids/remove': {
      const newState = {...state}
      delete newState[action.payload]
      return newState
    }
    case '@listidCardids/prependCardid': {
      const cardids = state[action.payload.listid]
      return {...state, [action.payload.listid]: [action.payload.cardid, ...cardids]}
    }
    case '@listidCardids/appendCardid': {
      const cardids = state[action.payload.listid]
      return {...state, [action.payload.listid]: [...cardids, action.payload.cardid]}
    }
    case '@listidCardids/removeCardid': {
      const cardids = state[action.payload.listid]
      return {
        ...state,
        [action.payload.listid]: cardids.filter(id => id !== action.payload.cardid)
      }
    }
  }
  return state
}
