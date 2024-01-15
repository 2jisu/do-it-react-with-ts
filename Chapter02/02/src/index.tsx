// import React from 'react'
import ReactDOM from 'react-dom/client'
import * as D from './data'

// [React.createElement 로 구현]
// const CE = React.createElement

// const rootVirtualDom = CE('ul', null, [
//   CE('li', null, [
//     CE('a', {href: 'http://www.google.com', target: '_blank'}, [
//       CE('p', null, 'go to google')
//     ])
//   ])
// ])

// [JSX 로 구현]
// const rootVirtualDom = (
//   <ul>
//     <li>
//       <a href="http://www.google.com" target="_blank">
//         <p>go to Google</p>
//       </a>
//     </li>
//   </ul>
// )

// JSX: 단순화된 React.createElement 함수 호출이므로 반환값은 가상 DOM 객체이므로 변수나 배열에 담을 수 있음.
// JSX 내부에서는 실행문(그 자체로 값이 아님) 사용 불가. 표현식(return 키워드 없이 어떤 값을 반환하는 코드)만 사용 가능

// [배열과 JSX]
// const children = [
//   <li>
//     <a href="http://www.google.com" target="_blank">
//       <p>got to Google</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.facebook.com" target="_blank">
//       <p>got to Facebook</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.twitter.com" target="_blank">
//       <p>got to Twitter</p>
//     </a>
//   </li>
// ]
// const rootVirtualDom = <ul>{children}</ul>

// [컴포넌트 배열]
// const children = [0, 1, 2].map((n: number) => <h3>Hello world! {n}</h3>)
// const rootVirtualDom = <div>{children}</div>

// [가짜 데이터 배열 렌더링]
const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))
const rootVirtualDom = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDom)
