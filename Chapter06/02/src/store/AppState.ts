import * as L from './listEntities'
import * as LO from './listidOrders'
import * as LC from './listidCardidOrders'
import * as C from './cardEntities'

export type AppState = {
  listEntities: L.State
  listidOrders: LO.State
  listidCardidOrders: LC.State
  cardEntities: C.State
}
