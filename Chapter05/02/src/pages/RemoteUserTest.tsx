import {useToggle} from '../hooks'
import * as D from '../data'
import * as R from '../store/remoteUser'
import {useCallback, useEffect, useState} from 'react'
import {Avatar, Title} from '../components'
import {useDispatch, useSelector} from 'react-redux'
import type {AppState} from '../store'
import {Button} from '../theme/daisyui'

export default function FetchTest() {
  const dispath = useDispatch()
  const user = useSelector<AppState, R.State>(({remoteUser}) => remoteUser)
  const [loading, toggleLoading] = useToggle()
  const [error, setError] = useState<Error | null>(null)

  const getRemoteUser = useCallback(() => {
    toggleLoading()
    D.fetchRandomUser()
      .then(user => dispath(R.setUser(user)))
      .catch(setError)
      .finally(toggleLoading)
  }, [dispath, toggleLoading])
  const changeName = useCallback(() => {
    toggleLoading()
    D.fetchRandomUser()
      .then(user => dispath(R.changeName(user.name)))
      .catch(setError)
      .finally(toggleLoading)
  }, [dispath, toggleLoading])
  const changeEmail = useCallback(
    () => dispath(R.changeEmail(D.randomEmail())),
    [dispath]
  )
  const changePicture = useCallback(
    () => dispath(R.changePicture({large: D.randomAvatar()})),
    [dispath]
  )

  useEffect(getRemoteUser, [getRemoteUser])

  return (
    <section className="mt-4">
      <Title>FetchTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn btn-sm btn-primary" onClick={getRemoteUser}>
          get remote user
        </Button>
        <Button className="ml-4 btn-sm btn btn-accent" onClick={changeName}>
          change name
        </Button>
        <Button className="ml-4 btn-sm btn btn-success" onClick={changeEmail}>
          change email
        </Button>
        <Button className="ml-4 btn-sm btn btn-secondary" onClick={changePicture}>
          change picture
        </Button>
      </div>
      {loading && (
        <div className="flex items-center justify-center ">
          <button className="btn btn-circle loading"></button>
        </div>
      )}
      {error && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{error.message}</p>
        </div>
      )}
      <div className="flex justify-center p-4 mt-4">
        <Avatar src={user.picture.large} />
        <div className="ml-4">
          <p className="text-xl text-bold">
            {user.name.title}. {user.name.first}
            {user.name.last}
          </p>
          <p className="italic text-gray-600">{user.email}</p>
        </div>
      </div>
    </section>
  )
}
