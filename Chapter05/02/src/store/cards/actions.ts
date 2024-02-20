import type * as T from './types'

export const addCard = (payload: T.Card): T.AddCardAction => ({
  type: '@cards/addCard',
  payload
})
export const removeCard = (payload: string): T.RemoveCardAction => ({
  type: '@cards/removeCard',
  payload
})
