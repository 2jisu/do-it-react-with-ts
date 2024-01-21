import {useEffect, useState} from 'react'
import Clock from './pages/Clock'
import {useClock} from './hooks'

export default function App() {
  // let today = new Date()
  // useRef 훅 사용 (여전히 화면은 갱신하지 않음 -> useRef 훅은 컴포넌트를 다시 렌더링하지 않기 때문)
  // let today = useRef(new Date())
  // useRef 대신 useState 훅을 사용하여 시계 완성
  // const [today, setToday] = useState(new Date())

  // 화면이 자동으로 갱신하지 않는 버그 발생
  /* useEffect(() => {
    console.log('useEffect called.')
    const duration = 1000
    const id = setInterval(() => {
      // today = new Date()
      // useRef 훅 사용
      //today.current = new Date()
      // console.log('today', today.current.toLocaleTimeString())

      // useRef 대신 useState 훅을 사용하여 시계 완성
      setToday(new Date())
    }, duration)
    return () => clearInterval(id)
  }, []) */
  // useRef 훅 사용
  // return <Clock today={today.current} />

  // useClock 커스텀 훅으로 만든 시계
  const today = useClock()

  return <Clock today={today} />
}
