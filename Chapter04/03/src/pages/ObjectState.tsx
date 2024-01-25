import type {FormEvent, ChangeEvent} from 'react'
import {useCallback, useState} from 'react'
import {Title} from '../components'
import {StringDecoder} from 'string_decoder'

// 객체 타입 값일 때 useState 훅 사용하기
type FormType = {
  name: string
  email: string
}
export default function ObjectState() {
  const [form, setForm] = useState<FormType>({name: '', email: ''})

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault() // 중요! e.preventDefault를 호출해야 페이지가 다시 렌더링되지 않음
      alert(JSON.stringify(form, null, 2))
    },
    [form]
  )

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(state => ({...state, name: e.target.value})) // 타입스크립트에서 객체를 반환하는 구문은 ({}) 형태로 사용해야 함
  }, [])
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(state => ({...state, email: e.target.value}))
  }, [])

  return (
    <section className="mt-4">
      <Title>ObjectState</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <input
              value={form.name}
              onChange={onChangeName}
              id="name"
              type="text"
              placeholder="enter your name"
              className="input input-primary"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">email</span>
            </label>
            <input
              value={form.email}
              onChange={onChangeEmail}
              id="name"
              type="text"
              placeholder="enter your email"
              className="input input-primary"
            />
          </div>
          <div className="flex justify-center mt-4">
            <input
              type="submit"
              value="submit"
              className="w-1/2 btn btn-sm btn-primary"
            />
            <input defaultValue="Cancel" className="w-1/2 ml-4 btn btn-sm" />
          </div>
        </form>
      </div>
    </section>
  )
}
