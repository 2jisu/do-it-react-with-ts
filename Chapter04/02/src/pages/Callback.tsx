import {useMemo, useCallback} from 'react'
import {Title} from '../components'
import * as D from '../data'
import {Button} from '../theme/daisyui'

// useCallback 훅으로 onClick 콜백 호출하기
export default function Callback() {
  const onClick = useCallback(() => alert('button clicked'), [])

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick}
            className="normal-case btn btn-primary btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onclick]
  )
  return (
    <section className="mt-4">
      <Title>Callback</Title>
      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </section>
  )
}
