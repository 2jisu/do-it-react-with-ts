import {useMemo} from 'react'
import {Title, Avatar} from '../components'
import * as D from '../data'

// useMemo 훅 함수로 Memo 컴포넌트 구현
export default function Memo() {
  const headTexts = useMemo<string[]>(
    () => ['No.', 'Name', 'Job Title', 'Email Address'],
    []
  )

  const users = useMemo<D.IUser[]>(() => D.makeArray(100).map(D.makeRandomUser), [])

  const head = useMemo(
    () => [headTexts.map(text => <th key={text}>{text}</th>)],
    [headTexts]
  )

  const body = useMemo(
    () =>
      users.map((user, index) => (
        <tr key={user.uuid}>
          <th>{index + 1}</th>
          <td className="flex items=center">
            <Avatar src={user.avatar} size="1.5rem" />
            <p className="ml-2">{user.name}</p>
          </td>
          <td>{user.jobTitle}</td>
          <td>{user.email}</td>
        </tr>
      )),
    [users]
  )

  return (
    <div className="mt-4">
      <Title>CreateOrUserTest</Title>
      <div className="p-4 mt-4 overflow-x-auto">
        <table className="table w-full table-zebra table-compact ">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  )
}
