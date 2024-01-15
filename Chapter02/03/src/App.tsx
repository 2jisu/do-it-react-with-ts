import {Component, ReactNode} from 'react'
import './App.css'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

// 리액트 컴포넌트(클래스 기반 컴포넌트, 함수형 컴포넌트): 첫글자가 소문자 / 사용자 컴포넌트: 카멜 케이스
// 함수형 컴포넌트와 리액트 훅의 사용을 권장

// 클래스 컴포넌트
// export default class App extends Component {
//   render() {
//     const isLoading = true
//     const children = isLoading ? (
//       <p>loading...</p>
//     ) : (
//       <li>
//         <a href="http://www.google.com" target="_blank">
//           <p>go to Google</p>
//         </a>
//       </li>
//     )
//     return <div>{children}</div>
//   }
// }

// 클래스 컴포넌트 사용 형태
// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http://www.google.com" text="go to Google" />
//         <ClassComponent href="https://www.twitter.com" text="go to Twitter" />
//       </ul>
//     )
//   }
// }

// 함수형 컴포넌트
// 장점: 상용구 코드(프로그래밍 언어의 문법을 갖추는 코드)가 없기 때문에 컴포넌트를 간결하게 구현 가능
// export default function App() {
//   return (
//     <ul>
//       <li>
//         <a href="http://www.google.com" target="_blank">
//           <p>go to Google</p>
//         </a>
//       </li>
//     </ul>
//   )
// }

// function 키워드 방식 함수 컴포넌트
// export default function App() {
//   return <div>Hello function-keyword component!</div>
// }

// 화살표 방식 함수 컴포넌트
// const App = () => {
//   return <h1>function component</h1>
// }
// export default App

// 화살표 함수 컴포넌트 사용
export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="go to Google" />
      <ArrowComponent href="https://www.twitter.com" text="go to Twitter" />
    </ul>
  )
}
