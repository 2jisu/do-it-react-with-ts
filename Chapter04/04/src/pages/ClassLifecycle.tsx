import {Component} from 'react'
import {Title} from '../components'

export default class ClassLifecycle extends Component {
  // 클래스 컴포넌트에서 상태는 항상 state라는 이름의 멤버 속성으로 구현해야 한다는 제약 조건이 있음
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer // 타입스크립트가 요구하는 구현 방식
  }

  // 컴포넌트가 마운트되는 시점에 이 메서드가 호출됨
  componentDidMount() {
    const duration = 1000
    const intervalId = setInterval(() => this.setState({today: new Date()}), duration)
    this.setState({intervalId})
  }
  // 언마운트가 일어나기 직전에 이 메서드가 호출됨
  componentWillUnmount() {
    clearInterval(this.state?.intervalId)
  }
  render() {
    //const today = new Date() // 컴포넌트의 상태로 만들어야 함
    const {today} = this.state
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="flex flex-col items-center mt-4">
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
        </div>
      </section>
    )
  }
}
