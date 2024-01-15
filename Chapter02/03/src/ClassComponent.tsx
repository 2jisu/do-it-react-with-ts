import {Component} from 'react'

// 클래스 컴포넌트
// 리액트에서의 속성: 부모 컴포넌트에서 자식 컴포넌트 쪽으로 전달되는 객체 타입의 데이터
// --> 즉, 객체지향 프로그래밍의 속성(클래스의 멤버 변수) + 재렌더링을 의미하는 객체 타입 변수
export type ClassComponentProps = {
  href: string
  text: string
}

// 클래스 컴포넌트는 반드시 Component 클래스를 상속해야 하며, render라는 이름의 메서드를 포함해야함.
// render 메서드는 null이나 가상 DOM 객체를 반환해야 함.
export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const {href, text} = this.props
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    )
  }
}
