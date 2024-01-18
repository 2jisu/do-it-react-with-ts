# 2장. 리액트 동작 원리

## 📚 목차

1. 가상 DOM 이해하기
2. JSX 구문 이해하기
3. 컴포넌트 이해하기
4. key와 children 속성 이해하기
5. 이벤트 속성 이해하기

---

### 🔍 가상 DOM 이해하기

- #### 문서 객체 모델(document object model, DOM)이란?

  - 마크업 언어: 쉽게 작성할 수 있고 컴퓨터도 그 의미를 쉽게 파악할 수 있는 특수한 형식의 텍스트를 의미합니다. (ex. XML, HTML)
  - 문서: 마크업 언어로 작성한 텍스트가 담긴 파일이나 인터넷 망을 통해 전송되는 스트림을 의미합니다.

  웹 브라우저는 HTML 형식의 문자열을 화면에 출력할 때 문자열을 분석하여 어떤 특별한 형식의 자바스크립트 객체 조합으로 바꿉니다.  
  이 특별한 형식의 자바스크립트 객체는 모두 자신의 특징에 맞는 인터페이스를 구현하는데, 이들 인터페이스를 총칭하여 **문서 객체 모델**이라고 합니다.

- #### 자바스크립트만 사용하는 프런트엔드 개발(물리 DOM)

  ```javascript
  let pPhysicalDOM = document.createElement("p"); // 물리 DOM 객체
  pPhysicalDOM.innerText = "Hello physical DOM wolrd!";
  document.body.appendChild(pPhysicalDOM); // pPhysicalDOM 객체를 DOM 트리에 추가해줌
  ```

- #### 리액트를 사용하는 프런트엔드 개발(가상 DOM)

  ```javascript
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  const pVirtualDOM = React.createElement(
    "p", // type
    null, // props
    "Hello virtual DOM world!" // children
  ); // 가상 DOM 객체
  root.render(pVirtualDOM); // 가상 DOM 을 물리 DOM 으로 전환해 주는 기능 (물리 DOM 의 appendChild 와 같은 기능), 가상 DOM 객체의 렌더링을 수행
  ```

  리액트는 React.createElement 함수로 HTML 요소를 가상 DOM 트리 구조로 구현한 뒤, render 메서드가 호출되는 순간 이 가상 DOM 트리를 물리 DOM 트리로 변환해줍니다.

> 임의의 물리 DOM 트리에서 일부 HTML 요소의 속성값이 변경될 때 이를 탐지하여 DOM 트리에 반영할 수 있는가?

- 물리 DOM 세계에서는 속성값을 바꿔야 하는 HTML 요소를 `document.getElementById('아이디')`로 찾아 해당 요소의 DOM 객체를 얻은 뒤 원하는 작업을 하면 그만입니다. 그러나 문제는 '아이디' 부분에 있습니다.  
  HTML 요소를 간결하게 사용하지 못하고, 항상 id 속성을 명시해 줘야 합니다. 또한 서로 중복되지 않게 아이디값을 만드는 것도 쉽지 않습니다.
  리액트는 가상 DOM이라는 개념을 도입하여 이 문제를 해결하고 있습니다.

### 🔍 JSX 구문 이해하기

- #### JSX = JavaScript + XML

  JSX는 **JavaScript XML**의 줄임말로서 XML 구문에 자바스크립트 코드를 결합하는 용도로 만들어진 구문입니다. `React.createElement` 호출 코드를 간결하게 하려고 고안한 것으로, 자바스크립트 언어를 확장하는 방식으로 구현되었습니다.

  ```javascript
  // React.createElement 로 구현
  const CE = React.createElement;

  const rootVirtualDom = CE("ul", null, [
    CE("li", null, [
      CE("a", { href: "http://www.google.com", target: "_blank" }, [
        CE("p", null, "go to google"),
      ]),
    ]),
  ]);
  ```

  ```javascript
  // JSX 로 구현
  const rootVirtualDom = (
    <ul>
      <li>
        <a href="http://www.google.com" target="_blank">
          <p>go to Google</p>
        </a>
      </li>
    </ul>
  );
  ```

### 🔍 컴포넌트 이해하기

- #### 컴포넌트란?

  컴포넌트는 객체지향 언어의 원조인 스몰토크에서 유래한 매우 오래된 용어입니다.  
  스몰토크에서 컴포넌트는 화면 UI를 처리하는 클래스를 의미합니다. 스몰토크 설계 이론에 따르면 컴포넌트는 모델-뷰-컨트롤러 설계 지침에 따라 구현된 클래스여야 합니다.

- #### 리액트 컴포넌트와 사용자 컴포넌트

  - #### 리액트 컴포넌트
    리액트 컴포넌트의 이름은 첫 글자를 소문자로 시작하며, 리액트는 HTML5의 각 태그에 대응하는 리액트 컴포넌트를 제공합니다.(ex. div, h1, span...)
  - #### 사용자 컴포넌트
    사용자 컴포넌트의 이름은 첫 글자를 대문자로 시작하는 카멜 표기법을 따릅니다.  
    사용자 컴포넌트를 만드는 이유는 가상 DOM 생성 코드를 사용자 컴포넌트 쪽으로 이동하여 코드를 간결하게 하려는 데 목적이 있습니다.

- #### 클래스 컴포넌트 만들기

  클랙스 컴포넌트는 반드시 react 패키지가 제공하는 `Component` 클래스를 상속해야 합니다.  
  그리고 `Component`를 상속한 클래스 컴포넌트는 `render`라는 이름의 메서드를 포함해야 하며, `render` 메서드는 null이나 가상 DOM 객체를 반환해야 합니다.

  - #### 속성
    객체지향 프로그래밍에서 속성은 클래스의 멤버 변수를 의미합니다.  
    그러나 리액트에서 속성은 부모 컴포넌트에서 자식 컴포넌트 쪽으로 전달되는 객체 타입의 데이터를 의미합니다.(참고로 리액트에서 객체지향 관점의 속성은 상태라고 합니다.)  
    객체지향 프로그래밍에서 클래스의 속성은 값을 저장하고 변경할 수 있는 기능만 하는 반면 리액트에서 속성은 값이 변하면 해당 컴포넌트를 다시 렌더링하여 수정된 속성값을 화면에 반영하는 기능도 합니다.  
    즉, 리액트 컴포넌트 관점에서 속성은 **객체지향 프로그래밍의 속성 + 재렌더링**을 의미하는 객체 타입 변수입니다.

  ```javascript
  import {Component} from 'react'

  // 클래스 컴포넌트의 속성
  export type ClassComponentProps = {
    href: string
    text: string
  }
  // 클래스 컴포넌트
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

  // 클래스 컴포넌트 사용 형태
  export default class App extends Component {
   render() {
     return (
       <ul>
         <ClassComponent href="http://www.google.com" text="go to Google" />
         <ClassComponent href="https://www.twitter.com" text="go to Twitter" />
       </ul>
     )
   }
  }
  ```

- #### 함수 컴포넌트 만들기

  클래스 컴포넌트는 사실 `render` 메서드만 의미가 있고 나머지 코드는 상용구입니다.  
  이에 주목하여 클래스 컴포넌트의 `render` 메서드 부분을 간단히 함수로 만들 수 있게 했고, 이를 '함수 컴포넌트'라고 합니다.  
  함수 컴포넌트의 가장 큰 장점은 상용구 코드가 없기 때문에 컴포넌트를 좀 더 간결하게 구현할 수 있다는 것입니다.  
  타입스크립트에서 함수를 만드는 구문은 2가지인데, 하나는 `function` 키워드로 만드는 방법이고 나머지 하나는 화살표 기호(`=>`)를 사용해서 만드는 방법입니다.

  - #### function 키워드 방식 함수 컴포넌트 만들기

    ```javascript
    export default function App() {
      return <div>Hello function-keyword component!</div>;
    }
    ```

  - #### 화살표 방식 함수 컴포넌트 만들기

    ```javascript
    const App = () => {
      return <h1>function component</h1>;
    };
    export default App;
    ```

    ```javascript
    import type {FC} from 'react'
    // 화살표 함수 컴포넌트 속성
    export type ArrowComponentProps = {
      href: string
      text: string
    }
    // 화살표 함수 컴포넌트
    const ArrowComponent: FC<ArrowComponentProps> = props => {
      const {href, text} = props
      return (
        <li>
          <a href={href}>
            <p>{text}</p>
          </a>
        </li>
      )
    }
    export default ArrowComponent

    import {Component} from 'react'
    // 화살표 함수 컴포넌트 사용 형태
    export default class App extends Component {
      render() {
        return (
          <ul>
            <ArrowComponent href="https://www.twitter.com" text="go to Twitter" />
          </ul>
        )
      }
    }
    ```

### 🔍 key와 children 속성 이해하기

- #### key 속성
  모든 리액트 컴포넌트는 key 속성을 포함하고 있습니다.  
  key 속성은 선택 속성이며, 문자열이나 숫자로 설정할 수 있습니다.  
  key 속성은 같은 이름의 컴포넌트가 여러 개일 때 이를 구분하기 위해 만든 속성입니다.
- #### children 속성
  children 속성은 선택 속성이며, 자식 요소를 포함할 수 있는 컴포넌트에서만 사용할 수 있습니다.(ex. `<div>`는 사용 가능, `<input>`, `<img>`사용 불가능)

### 🔍 이벤트 속성 이해하기

모든 HTML 요소는 `onmouseenter`, `onmouseover` 처럼 `on`으로 시작하는 속성을 제공하는데, 이를 이벤트 속성이라고 합니다.

- #### 이벤트란?

  화면 UI에서 마우스 클릭, 텍스트 입력과 같은 사용자 행위가 일어날 때 '이벤트가 발생했다'고 표현합니다.

  - #### Event 타입

    웹 브라우저의 자바스크립트 엔진은 `Event` 타입을 제공합니다. `Event`의 주요 속성과 의미는 다음과 같습니다.
    |종류|설명|
    |---|---|
    |type|이벤트 이름으로 대소문자를 구분하지 않습니다.|
    |isTrusted|이벤트가 웹 브라우저에서 발생한 것인지(true), 프로그래밍으로 발생한 것인지(false)를 판단합니다.|
    |target|이벤트가 처음 발생한 HTML 요소입니다.|
    |currentTarget|이벤트의 현재 대상, 즉 이벤트 버블링 중에서 이벤트가 현재 위치한 객체입니다.|
    |bubbles|이벤트가 DOM을 타고 버블링될지 여부를 결정합니다.|

  - #### EventTarget 타입

    DOM의 최상위 타입인 `EventTarget`은 `addEventListener`, `removeEventListenr`, `dispatchEventListener`라는 메서드 3개를 제공합니다.

    - #### addEventListener 메서드

      `addEventListener` 메서드는 이벤트 처리기를 추가한다는 의미이며, 하나의 이벤트에 이벤트 처리기를 여러 개 부착할 수 있다는 것을 뜻합니다.

      ```javascript
      // addEventListenr 사용법
      DOM객체.addEventListener(이벤트_이름: string, 콜백_함수: (e: Event) => void);

      // 클릭 이벤트 부착 예시
      window.addEventListener('click', (e: Event) => console.log("mouse click occurs."));
      ```

    - #### dispatchEventListener 메서드

      `Event` 타입 객체는 이벤트의 `target` 속성값이 되는 타깃 DOM 객체의 `dispatchEventListener`를 호출하여 이벤트를 발생시킬 수 있습니다.

      ```javascript
      // dispatchEventListener 사용 예시
      타깃_DOM_객체.dispatchEventListener(
        new Event("click", { bubbles: ture })
      );
      ```

  - #### 이벤트 처리기

    이벤트 처리기(`EventListener`)는 이벤트가 발생할 때까지 귀 기울여 기다리다가 이벤트가 발생하면 해당 이벤트를 코드 쪽으로 알려주는 역할을 합니다.

  - #### 이벤트 버블링

    이벤트 버블링이란 자식 요소에서 발생한 이벤트가 가까운 부모 요소에서 가장 먼 부모 요소까지 계속 전달되는 현상을 의미합니다.

  - #### 이벤트 캡처링

    이벤트 캡처링은 가까운 부모에서 먼 부모 쪽으로 이벤트가 버블링되며 전달되는 것을 멈추는 것을 의미합니다.

- #### 물리 DOM 객체의 이벤트 속성

  `addEventListener` 메서드는 사용법이 조금 번거롭기 때문에 대부분의 HTML 요소는 `on` 뒤에 이벤트 이름을 붙인 속성을 제공합니다. 이벤트 속성은 `addEventListener`의 사용법을 간결하게 하는 것이 목적이므로 이벤트 속성값에는 항상 이벤트 처리기를 설정해야 합니다.

  ```javascript
  // onclick 이벤트 속성으로 구현한 예제
  window.onclick = (e: Event) => console.log("mouse click occurs.");
  ```

- #### 리액트 프레임워크의 이벤트 속성

  리액트 컴포넌트도 `on이벤트명` 형태로 된 HTML 요소의 이벤트 속성들을 제공합니다.  
  그런데 한 가지 큰 차이는 HTML 요소의 이벤트 속성은 모두 소문자지만, 리액트 컴포넌트의 속성은 소문자로 시작하는 카멜 표기법을 사용합니다.  
  그리고 리액트 컴포넌트의 이벤트 속성에 설정하는 콜백 함수는 매개변수 e의 타입이 `Event`가 아니라 리액트가 제공하는 `SyntheticEvent` 타입을 설정해야 한다는 차이가 있습니다.

  ```javascript
  import { SyntheticEvent } from "react";

  export default function ReactOnClick() {
    const onClick = (e: SyntheticEvent) => {
      const { isTrusted, target, bubbles } = e;
      console.log("mouse click occurs on <button>", isTrusted, target, bubbles);
    };
    return (
      <div>
        <p>ReactOnClick</p>
        <button onClick={onClick}>Click Me</button>
      </div>
    );
  }
  ```
