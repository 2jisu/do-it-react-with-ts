import {useCallback, useRef} from 'react'
import {Title} from '../components'
import {ValidatableInput, ValidatableInputMethods} from '../theme/daisyui'

export default function ValidatableInputTest() {
  const methodsRef = useRef<ValidatableInputMethods>(null)

  const validateEmail = useCallback(() => {
    if (methodsRef.current) {
      const [valid, valudOrErrorMessage] = methodsRef.current.validate()
      if (valid) alert(`${valudOrErrorMessage}는 유효한 이메일 주소입니다.`)
      else alert(valudOrErrorMessage)
    }
  }, [])

  return (
    <section className="mt-4">
      <Title>ValidatableInputTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/2 p-2">
          <ValidatableInput type="email" ref={methodsRef} className="input-primary" />
          <button onClick={validateEmail} className="mt-4 btn btn-primary">
            validate
          </button>
        </div>
      </div>
    </section>
  )
}
