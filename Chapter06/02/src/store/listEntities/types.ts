import type {Action} from 'redux'
import type {List} from '../commonTypes'
export * from '../commonTypes'

export type State = Record<string, List>

export type AddListAction = Action<'@listEntities/add'> & {
  payload: List
}
export type RemoveListAction = Action<'@listEntities/remove'> & {
  payload: string
}
export type Actions = AddListAction | RemoveListAction
