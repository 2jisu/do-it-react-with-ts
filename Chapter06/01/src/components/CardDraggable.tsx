import type {FC, PropsWithChildren} from 'react'
import {Draggable} from 'react-beautiful-dnd'

export type CardDraggableProps = {
  draggableId: string
  index: number
}

export const CardDraggable: FC<PropsWithChildren<CardDraggableProps>> = ({
  draggableId,
  index,
  children
}) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {provided => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            {children}
          </div>
        )
      }}
    </Draggable>
  )
}
