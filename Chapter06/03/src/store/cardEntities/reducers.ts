import * as T from './types'

const initialState: T.State = {}

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@cardEntities/add':
      return {...state, [action.payload.uuid]: action.payload}

    case '@cardEntities/remove': {
      const newState = {...state}
      delete newState[action.payload]
      return newState
    }
  }
  return state
}
