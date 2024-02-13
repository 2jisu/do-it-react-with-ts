import type {FC} from 'react'
import type {ICard} from '../../data'
import {CardDraggable} from '../../components'
import {Div, Avatar} from '../../components'
import {Icon} from '../../theme/daisyui'

export type ListCardProps = {
  card: ICard
  onRemove?: () => void
  onClick?: () => void
  draggableId: string
  index: number
}

const ListCard: FC<ListCardProps> = ({card, onRemove, onClick, draggableId, index}) => {
  const {image, writer} = card
  const {avatar, name, jobTitle} = writer

  return (
    <CardDraggable draggableId={draggableId} index={index}>
      <Div className="m-2 border shadow-lg rounded-xl" width="10rem" onClick={onClick}>
        <Div src={image} className="relative h-20">
          <Icon
            name="remove"
            className="absolute right-1 top-1 btn-primary btn-xs"
            onClick={onRemove}
          />
        </Div>
        <Div className="flex flex-col p-2">
          <Div minHeight="4rem" height="4rem" maxHeight="4rem">
            <Div className="flex flex-row items-center">
              <Avatar src={avatar} size="2rem" />
              <Div className="ml-2">
                <p className="text-xs font-bold">{name}</p>
                <p className="text-xs text-gray-500">{jobTitle}</p>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </CardDraggable>
  )
}
export default ListCard
