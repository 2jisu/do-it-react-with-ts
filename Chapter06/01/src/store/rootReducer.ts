import {combineReducers} from 'redux'
import * as L from './listEntities'
import * as LO from './listidOrders'
import * as LC from './listidCardidOrders'
import * as C from './cardEntities'

export const rootReducer = combineReducers({
  listEntities: L.reducer,
  listidOrders: LO.reducer,
  listidCardidOrders: LC.reducer,
  cardEntities: C.reducer
})
