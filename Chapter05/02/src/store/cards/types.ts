import type {Action} from 'redux'
import * as D from '../../data'

export type Card = D.ICard
export type State = Card[]

export type AddCardAction = Action<'@cards/addCard'> & {
  payload: Card
}
export type RemoveCardAction = Action<'@cards/removeCard'> & {
  payload: string
}

export type Actions = AddCardAction | RemoveCardAction
