import {useDispatch, useSelector} from 'react-redux'
import type {AppState} from '../store'
import * as C from '../store/clock'
import {useInterval} from '../hooks'
import {Title} from '../components'

export default function ClockTest() {
  const clock = useSelector<AppState, C.State>(state => state.clock)
  const dispatch = useDispatch()
  useInterval(() => dispatch(C.setClock(new Date())))

  return (
    <section className="mt-4">
      <Title>ClockTest</Title>
      <div className="flex flex-col items-center mt-4">
        <p className="text-2xl text-blue-600 text-bold">{clock.toLocaleTimeString()}</p>
        <p className="text-lg text-blue-400 text-bold">{clock.toLocaleDateString()}</p>
      </div>
    </section>
  )
}
