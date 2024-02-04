import {useCallback, useEffect, useRef} from 'react'
import {Title} from '../components'

// useState 호출 없이 <input>의 value 속성값 얻기
export default function InputValueTest() {
  const inputRef = useRef<HTMLInputElement>(null)

  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`), [])
  useEffect(() => inputRef.current?.focus(), [])
  return (
    <section className="mt-4">
      <Title>InputValueTest</Title>
      <div className="flex justify-center mt-4">
        <input ref={inputRef} className="input input-primary" />
        <button onClick={getValue} className="mt-4 btn btn-primary">
          get value
        </button>
      </div>
    </section>
  )
}
