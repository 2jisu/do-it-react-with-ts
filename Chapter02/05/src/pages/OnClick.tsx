// 물리 DOM 객체의 이벤트 속성
// 옵셔널 체이닝 연산자는 'on이벤트명' 으로 값을 설정하는 구문에서는 사용 불가
// 'on이벤트명' 으로 설정한 이벤트는 가장 마지막에 설정된 콜백 함수를 호출함.
const rootDiv = document.getElementById('root')
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles)
  }
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    // prettier-ignore
    console.log('mouse click also occurs on rootDiv', isTrusted, target, bubbles)
  }
}

export default function onClick() {
  return <div>OnClick</div>
}
