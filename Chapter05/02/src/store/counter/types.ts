import type {Action} from 'redux'

export type State = number
export type SetCounterAction = Action<'@counter/setCounter'> & {
  payload: State
}

export type Actions = SetCounterAction
