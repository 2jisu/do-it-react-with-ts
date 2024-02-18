import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'
import ClockTest from './pages/ClockTest'
import CounterTest from './pages/CounterTest'
import RemoteUserTest from './pages/RemoteUserTest'
import CardsTest from './pages/CardsTest'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      {/* 리액트 버전 18 대응 추가 요소 (ReduxProvider에 반드시 1개 이상의 자식 요소를 가져야함) */}
      <CardsTest />
      <RemoteUserTest />
      <CounterTest />
      <ClockTest />
    </ReduxProvider>
  )
}
