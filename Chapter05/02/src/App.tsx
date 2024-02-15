import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <div />{' '}
      {/* 리액트 버전 18 대응 추가 요소 (ReduxProvider에 반드시 1개 이상의 자식 요소를 가져야함) */}
    </ReduxProvider>
  )
}
