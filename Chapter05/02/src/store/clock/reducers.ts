import * as T from './types'

const initialState: T.State = new Date()

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@clock/setClock':
      return action.payload
  }

  return state
}
