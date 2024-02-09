import type {ICard} from '../data'

export type UUID = string
export type List = {
  uuid: UUID
  title: string
}
export type Card = ICard
export type CardidListid = {
  cardid: UUID
  listid: UUID
}
export type ListidCardid = CardidListid
export type ListidCardidS = {listid: UUID; cardids: UUID[]}
export type CardidListidIndex = CardidListid & {
  index: number
}
