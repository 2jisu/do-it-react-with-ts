import {useEffect} from 'react'
import Clock from './pages/Clock'

export default function App() {
  let today = new Date()

  // useEffect 훅 사용법
  // useEffect(콜백_함수, 의존성_목록)
  // 콜백_함수 = () => {}
  // 의존성 목록에 있는 조건 중 어느 하나라도 충족되면 그때마다 콜백 함수를 다시 실행함.

  // 화면이 자동으로 갱신하지 않는 버그 발생
  useEffect(() => {
    console.log('useEffect called.')
    const duration = 1000
    const id = setInterval(() => {
      today = new Date()
      console.log('today', today.toLocaleTimeString())
    }, duration)
    return () => clearInterval(id)
  }, [])
  return <Clock today={today} />
}
