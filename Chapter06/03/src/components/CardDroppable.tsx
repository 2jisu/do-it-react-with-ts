import type {FC, PropsWithChildren} from 'react'
import {Droppable} from 'react-beautiful-dnd'

export type CardDroppableProps = {
  droppableId: string
}
export const CardDroppable: FC<PropsWithChildren<CardDroppableProps>> = ({
  droppableId,
  children
}) => {
  return (
    <Droppable droppableId={droppableId}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="flex flex-col p-2">
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
