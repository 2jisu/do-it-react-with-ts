// 물리 DOM 객체의 이벤트 속성
export default function DispatchEvent() {
  const onCallDispatchEvent = () => {
    // isTrusted: false(프로그래밍으로 발생) <-> true: 웹 브라우저에서 발생
    console.log('onCallDispatchEvent')
    document.getElementById('root')?.dispatchEvent(new Event('click', {bubbles: true}))
  }
  const onCallClick = () => {
    // isTrusted: false(프로그래밍으로 발생) <-> true: 웹 브라우저에서 발생
    console.log('onCallClick')
    document.getElementById('root')?.click()
  }
  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>call dispatchEvent</button>
      <button onClick={onCallClick}>call click</button>
    </div>
  )
}
