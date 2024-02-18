import type {Action} from 'redux'

export type State = Date
export type SetClockAction = Action<'@clock/setClock'> & {
  payload: State
}

export type Actions = SetClockAction
