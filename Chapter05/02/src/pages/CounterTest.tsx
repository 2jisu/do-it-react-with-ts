import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../store'
import * as C from '../store/counter'
import {useCallback} from 'react'
import {Icon, Subtitle, Title} from '../components'

export default function CounterTest() {
  const dispatch = useDispatch()

  const counter = useSelector<AppState, C.State>(({counter}) => counter)
  const increase = useCallback(() => dispatch(C.increaseCounter()), [dispatch])
  const decrease = useCallback(() => dispatch(C.decreaseCounter()), [dispatch])

  return (
    <section className="mt-4">
      <Title>CounterTest</Title>
      <div className="flex justify-center p-4 mt-4">
        <div className="flex items-center justify-around w-1/3 text-blue-500 text-bold">
          <Icon name="add_circle" onClick={increase} />
          <Subtitle>{counter}</Subtitle>
          <Icon name="remove_circle" onClick={decrease} />
        </div>
      </div>
    </section>
  )
}
