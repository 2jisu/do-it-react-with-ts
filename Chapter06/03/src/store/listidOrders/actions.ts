import type * as T from './types'

export const setListidOrders = (payload: T.State): T.SetListidOrders => ({
  type: '@listidOrders/set',
  payload
})
export const addListidToOrders = (payload: T.UUID): T.AddListidToOrders => ({
  type: '@listidOrders/add',
  payload
})
export const removeListidFromOrders = (payload: T.UUID): T.RemoveListidFromOrders => ({
  type: '@listidOrders/remove',
  payload
})
