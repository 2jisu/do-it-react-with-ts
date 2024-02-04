import {useCallback, useEffect, useRef} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

// 사용자 컴포넌트에서 ref 사용
export default function ForwardRefTest() {
  const inputRef = useRef<HTMLInputElement>(null)

  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`), [])
  useEffect(() => inputRef.current?.focus(), [])
  return (
    <section className="mt-4">
      <Title>InputValueTest</Title>
      <div className="flex justify-center mt-4">
        <Input ref={inputRef} className="input input-primary" />
        <button onClick={getValue} className="mt-4 btn btn-primary">
          get value
        </button>
      </div>
    </section>
  )
}
