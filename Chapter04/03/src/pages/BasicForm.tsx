import type {FormEvent, ChangeEvent} from 'react'
import {useCallback, useState} from 'react'
import {Title} from '../components'

export default function BasicForm() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault() // 중요! e.preventDefault를 호출해야 페이지가 다시 렌더링되지 않음
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      alert(JSON.stringify(Object.fromEntries(formData), null, 2))
    },
    [name, email]
  )

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(notUsed => e.target.value)
  }, [])
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(notUsed => e.target.value)
  }, [])

  return (
    <section className="mt-4">
      <Title>BasicForm</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <input
              value={name}
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
              value={email}
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
