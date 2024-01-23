import {useState, useCallback} from 'react'
import {Title} from '../components'
import {Icon} from '../theme/daisyui'

// 세터 함수의 매개변수를 콜백으로 호출
export default function NumberState() {
  const [count, setCount] = useState<number>(0)

  const increment = useCallback(() => {
    setCount(count => count + 1) // 함수를 입력 변수로 세터 호출
  }, []) // 의존성 목록에 count를 넣지 않아도 됨
  const decrement = useCallback(() => {
    setCount(count => count - 1)
  }, [])

  return (
    <section className="mt-4 mb-8">
      <Title>NumberState</Title>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-1/4 mt-4">
          <Icon name="add" className="btn-primary btn-lg" onClick={increment} />
          <p className="text-3xl text-bold text-primary">{count}</p>
          <Icon name="remove" className="btn-accent btn-lg" onClick={decrement} />
        </div>
      </div>
    </section>
  )
}
