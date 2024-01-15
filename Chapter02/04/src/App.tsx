import P from './P'

// key 속성
// 선택 속성이며, 문자열이나 숫자로 설정해야 함.
// 같은 이름의 컴포넌트가 여러 개일 때 이들을 구분하기 위한 속성.
// export default function App() {
//   const texts = ['hello', 'wolrd'].map((text, index) => <p key={index}>{text}</p>)
//   return <div>{texts}</div>
// }

// children 속성
// 선택 속성이며, 자식 요소를 포함할 수 있는 컴포넌트에서만 사용 가능함.
// export default function App() {
//   const texts = ['hello', 'wolrd'].map((text, index) => <p key={index} children={text} />)
//   return <div children={texts} />
// }

// P 컴포넌트 사용
export default function App() {
  const texts = ['hello', 'wolrd'].map((text, index) => <P key={index} children={text} />)
  return <div children={texts} />
}
