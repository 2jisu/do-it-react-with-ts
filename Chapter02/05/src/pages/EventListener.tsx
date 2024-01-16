// 이벤트 리스너 (이벤트 처리기): 이벤트가 발생할 때까지 귀 기울여 기다리다가(콜백 함수) 이벤트가 발생하면 해당 이벤트를 코드 쪽으로 알려주는 역할을 수행
// 타입스크립트의 옵셔널 체이닝 연산자 (?.): 해당 메서드가 null을 반환할 경우 뒤쪽의 메서드를 호출하지 않음.
// 물리 DOM 객체의 이벤트 속성
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click occurs.', isTrusted, target, bubbles)
})
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click also occurs.', isTrusted, target, bubbles)
})

export default function EventListener() {
  return <div>EventListener</div>
}
