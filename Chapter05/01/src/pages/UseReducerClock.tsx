import {Div, Title, Subtitle} from '../components'
import {AppState} from '../store'
import {useInterval} from '../hooks'
import {SetTodayAction} from '../store/actions'
import {useReducer} from 'react'

export default function UseReducerClock() {
  const [{today}, dispatch] = useReducer(
    (state: AppState, action: SetTodayAction) => {
      switch (action.type) {
        case 'setToday':
          return {...state, today: new Date()}
      }
    },
    {today: new Date()}
  )

  useInterval(() => {
    dispatch({type: 'setToday', today: new Date()})
  })

  return (
    <Div className="flex flex-col items-center justify-center mt-16">
      <Title className="text-5xl">UseReducerClock</Title>
      <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}
