import {useEffect, useRef} from 'react'
import {Title} from '../components'

// 입력 상자에 자동 포커싱 구현
export default function InputFocusTest() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => inputRef.current?.focus(), [])
  return (
    <section className="mt-4">
      <Title>InputFocusTest</Title>
      <div className="flex justify-center mt-4">
        <input
          ref={inputRef}
          className="input input-primary"
          placeholder="enter some text"
        />
      </div>
    </section>
  )
}
