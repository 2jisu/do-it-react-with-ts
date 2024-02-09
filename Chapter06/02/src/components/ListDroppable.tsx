import type {FC} from 'react'
import {useRef} from 'react'
import type {DivProps} from './Div'
import {useDrop} from 'react-dnd'

export type ListDroppableProps = DivProps & {}

export const ListDroppable: FC<ListDroppableProps> = ({...props}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: 'list'
  })
  drop(divRef)
  return <div ref={divRef} {...props} />
}
