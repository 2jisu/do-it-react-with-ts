import {SyntheticEvent} from 'react'

// 이벤트 캡처링: 가까운 부모에서 먼 부모 쪽으로 이벤트가 버블링되며 전달되는 것을 멈춤
export default function StopPropagation() {
  const onDivClick = (e: SyntheticEvent) => console.log('click event bubbles on <div>')
  const onButtonClick = (e: SyntheticEvent) => {
    console.log('mouse click occurs on <button> and call stopPropagation')
    e.stopPropagation()
  }
  return (
    <div onClick={onDivClick}>
      <p>StopPropagation</p>
      <button onClick={onButtonClick}>Click Me and stop event propagation</button>
    </div>
  )
}
