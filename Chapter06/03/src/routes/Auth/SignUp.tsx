import type {ChangeEvent} from 'react'
import {useCallback, useState} from 'react'
import * as D from '../../data'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'

type SignUpFormType = Record<'email' | 'password' | 'confirmPassword', string>
const initialFormState = {email: D.randomEmail(), password: '1', confirmPassword: '1'}

export default function SignUp() {
  const [{email, password, confirmPassword}, setForm] =
    useState<SignUpFormType>(initialFormState)

  const changed = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm(obj => ({...obj, [key]: e.target.value}))
    },
    []
  )

  const navigate = useNavigate()
  const {signup} = useAuth()

  const crateAccount = useCallback(() => {
    console.log(email, password, confirmPassword)
    if (password == confirmPassword) {
      signup(email, password, () => navigate('/'))
    } else alert('password is not equal to confirmPassword')
  }, [email, password, confirmPassword])
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl text-center text-primary">Sign Up</h1>
          <input
            type="text"
            className="w-full p-3 mb-4 input input-primary"
            name="email"
            placeholder="email"
            value={email}
            onChange={changed('email')}
          />
          <input
            type="password"
            className="w-full p-3 mb-4 input input-primary"
            name="password"
            placeholder="password"
            value={password}
            onChange={changed('password')}
          />
          <input
            type="password"
            className="w-full p-3 mb-4 input input-primary"
            name="confirm_password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={changed('confirmPassword')}
          />
          <button type="submit" className="w-full btn btn-primary" onClick={crateAccount}>
            Create Account
          </button>
        </div>
        <div className="mt-6 text-grey-dark">
          Already have an account?
          <Link className="btn btn-link btn-primary" to="/login/">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
