import {forwardRef, useImperativeHandle, useRef} from 'react'
import {ReactInputProps} from './Input'

export type ValidatableInputMethods = {
  validate: () => [boolean, string]
}

// useImperativeHandle 훅 사용
export const ValidatableInput = forwardRef<ValidatableInputMethods, ReactInputProps>(
  ({type, className: _className, ...inputProps}, methodsRef) => {
    const className = ['input', _className].join(' ')
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(
      methodsRef,
      () => ({
        validate: (): [boolean, string] => {
          const value = inputRef.current?.value
          if (!value || !value.length) return [false, '사용자가 입력한 내용이 없습니다.']

          switch (type) {
            case 'email': {
              const regEx =
                /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

              const valid = regEx.test(value)
              return valid ? [true, value] : [false, '틀린 이메일 주소입니다.']
            }
          }
          return [true, value]
        }
      }),
      [type]
    )
    return <input {...inputProps} className={className} ref={inputRef} />
  }
)
