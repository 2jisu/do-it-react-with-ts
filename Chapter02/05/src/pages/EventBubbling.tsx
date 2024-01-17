import {SyntheticEvent} from 'react'

// 이벤트 버블링: 자식 요소에서 발생한 이벤트가 가까운 부모 요소에서 가장 먼 부모 요소까지 계속 전달되는 현상
// currentTarget: 이벤트 버블링 중 현재 이벤트가 위치한 객체
export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log('click event bubbles on <div>', isTrusted, target, bubbles, currentTarget)
  }
  const onButtonClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log('click event starts at <button>', isTrusted, target, bubbles)
  }
  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  )
}
