import type {Action} from 'redux'

export type SetTodayAction = Action<'setToday'> & {
  today: Date
}

export type Actions = SetTodayAction
