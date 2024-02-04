import {useCallback, useRef} from 'react'
import {Title} from '../components'

export default function ClickTest() {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClick = useCallback(() => inputRef.current?.click(), [])

  return (
    <section className="mt-4">
      <Title>ClickTest</Title>
      <div className="flex items-center justify-center mt-4">
        <button className="mr-4 btn btn-primary" onClick={onClick}>
          Click Me
        </button>
        <input ref={inputRef} className="hidden" type="file" accept="image/*" />
      </div>
    </section>
  )
}
