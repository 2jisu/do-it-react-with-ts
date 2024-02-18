import type * as T from './types'

export const setClock = (payload: T.State): T.SetClockAction => ({
  type: '@clock/setClock',
  payload
})
