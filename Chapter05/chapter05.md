# 5장. 상태 관리와 리덕스 패키지

## 📚 목차

1. 리덕스 기본 개념 이해하기
2. 리듀서 활용하기
3. 리덕스 미들웨어 이해하기
4. 트렐로 따라 만들기

---

### 🔍 리덕스 기본 개념 이해하기

- #### 리덕스와 리덕스 관련 필수 패키지

  리액트 제작사는 리액트를 처음 발표할 때 플럭스라고 부르는 앱 설계 규격을 함께 발표했습니다.  
  플럭스는 앱 수준 상태, 즉 여러 컴포넌트가 공유하는 상태를 리액트 방식으로 구현하는 방법입니다.  
  이후로 플럭스 설계 규격을 준수하는 오픈소스 라이브러리가 등장했는데, **리덕스**는 그중에서 가장 많이 사용되는 패키지입니다.

- #### 앱 수준 상태 알아보기

  앱을 구성하는 모든 컴포넌트가 함께 공유할 수 있는 상태를 **앱 수준 상태** 줄여서 '앱 상태'라고 합니다.

  - #### Provider 컴포넌트와 store 속성

    리덕스는 리액트 컨텍스트에 기반을 둔 라이브러리입니다. 즉, 리덕스 기능을 사용하려면 리액트 컨텍스트의 Provider 컴포넌트가 최상위로 동작해야 합니다.

  - #### 리덕스 저장소와 리듀서, 액션 알아보기

    **리덕스 저장소**는 AppState 타입 데이터를 저장하는 공간입니다. 그런데 리덕스 저장소를 생성하려면 리듀서라는 함수를 알아야 합니다.  
    **리듀서**는 현재 상태와 액션이라는 2가지 매개변수로 새로운 상태를 만들어서 반환합니다.

  - #### 스토어 객체 관리 함수
    RTK(@reduxjs/toolkit) 패키지는 리듀서에서 반환한 새로운 상태를 **스토어**라는 객체로 정리해 관리하는 configureStore 함수를 제공합니다.

- #### useSelector 훅 사용하기

  useSelector 훅은 리덕스 저장소에 어떤 내용이 저장되었는지 알고자 스토어의 상탯값을 반환해 줍니다.

  - #### 리덕스 액션 알아보기

    리덕스에서 액션은 저장소의 특정 속성값만 변경하고 싶을 때 사용하는 방법입니다. 리덕스 액션은 반드시 type이란 이름의 속성이 있어야 합니다.  
    액션의 type 속성은 리듀서에 switch~case 문 같은 분기문을 써서 type 속성에 따라 적절하게 분기하도록 합니다.

  - #### 리덕스 리듀서 알아보기
    리듀서 함수의 목적은 첫 번째 매개변수에 담긴 과거 상탯값(prevState)을 바탕으로 새로운 상탯값(newState)을 반환하는 것입니다.  
    '리듀서'라는 이름에는 prevState와 action 두 객체를 결합하여 1개의 newState로 줄이는 용도라는 의미를 내포하고 있습니다.  
    그런데 리덕스에서 리듀서를 구현할 때는 preState, newState라는 이름 대신 그냥 state를 주로 사용합니다.

- #### useDispatch 훅 사용하기

  useDispatch 훅을 호출하면 `dispatch()` 함수를 얻을 수 있는데, 이 함수를 사용하면 리덕스 저장소에 저장된 AppState 객체의 멤버 전부나 일부를 변경할 수 있습니다.

  - #### dispatch 함수와 리듀서 간의 관계 이해하기

    리덕스 저장소와 리듀서 그리고 액션과 `dispatch()` 함수의 관계를 그림으로 표현하면 다음과 같습니다.

    ```mermaid
    flowchart LR
    A["dispatch(액션)"] --> B[리듀서] --> C[리덕스 저장소];
    ```

    이 그림은 리덕스 저장소에 저장된 앱 수준 상태의 일부 속성값을 변경하려면 일단 액션을 만들어야 한다는 것을 의미합니다.  
    그리고 액션은 반드시 `dispatch()` 함수로 리덕스 저장소에 전달해야 합니다.  
    그리고 액션이 리덕스 저장소에 전달될 때 리듀서가 관여합니다.  
    또한 리듀서에 전달되는 두 매개변수는 아래와 같습니다.

    > function reducer(state, action)

    리덕스 저장소는 앱 수준 상태를 저장하는 것이 목적이므로 첫 번째 매개변수인 state를 만들 수 있습니다.  
    또한 액션은 반드시 `dispatch()` 함수로 전달되므로 `dispatch(액션)` 코드가 실행되면 두 번째 매개변수 action이 리듀서로 전달됩니다.

- #### useReducer 훅 사용하기

  useReducer 훅은 리덕스의 리듀서와 사실상 똑같은 기능을 수행합니다.  
  useReducer 훅은 컨텍스트 없이 사용하기 때문에 리덕스의 상태는 앱의 모든 컴포넌트에서 접근할 수 있지만(전역 상태), useReducer 훅의 상태는 다른 훅 함수들처럼 useReducer 훅을 호출한 컴포넌트 안에서만 유효하다는(지역 상태) 차이가 있습니다.  
  useReducer 훅의 사용법은 아래와 같습니다.

  > const [상태, dispatch] = useReducer(리듀서, 상태\_초깃값)

  그런데 리덕스의 리듀서와 useReducer 훅은 초기 상탯값을 설정하는 부분에 차이가 있습니다.  
  리덕스의 리듀서는 리듀서의 첫 번째 매개변수에 기본값을 설정하는 반면 useReducer 훅은 두 번째 매개변수에 초깃값을 설정합니다.

  ```javascript
  // 리덕스의 리듀서 기본값 설정 방법
  const initialState: AppState = {
    today: new Date(),
  };
  export const rootReducer = (
    state: AppState = initialState,
    action: AppActions
  ) => {};
  ```

  ```javascript
  // useReducer 훅 초기 상탯값 설정 방법
  useReducer((state: AppState, action: AppActions) => {}, {
    today: new Date(),
  });
  ```

### 🔍 리듀서 활용하기

- #### 리듀서 합치기

  `combinedReducers()` 함수는 여러 리듀서를 통합하여 새로운 리듀서를 만들어 줍니다.  
  `combinedReducers()` 함수는 리덕스 관련 코드를 어떤 기계적인 패턴으로 구현할 수 있게 해줍니다.

  - #### '@이름/' 접두사와 payload라는 변수 이름을 사용하는 이유 알기

    `combinedReducers()` 리듀서에 액션이 유입되면, 특정 리듀서뿐만 아니라 `combinedReducers()`가 결합한 모든 리듀서에 액션이 전송됩니다.  
    따라서 액션 타입을 평범하게 접두사가 없는 이름으로 지으면 type값이 겹칠 수 있으며, 의도하지 않은 리듀서가 자신의 것이 아닌 액션을 처리하다가 오류가 발생할 수 있습니다.  
    이런 이름 충돌을 방지하는 효과적인 방법이 `@이름/` 접두사를 type 이름 앞에 붙이는 것입니다. 그러면 액션의 행선지가 분명해져서 이름 충돌이 발생하는 코드를 미연에 방지할 수 있고 가독성도 좋아집니다.  
    그리고 payload라는 이름을 사용하는 이유는 규모가 큰 앱을 개발하다 보면 AppState를 구성하는 멤버 상태의 타입들이 수시로 변하기 때문입니다.

  - #### 리듀서는 순수 함수여야 한다
    리덕스는 리덕스 저장소에 저장된 과거 상태와 리듀서 함수가 반환하는 현재 상태를 `if(과거_상태 !== 현재_상태)` 방식으로 비교합니다. 그런데 이런 형태의 비교가 가능하려면 리듀서 함수 내부에서 현재 상태는 과거 상태를 깊은 복사해야 하며, 이 때문에 리덕스의 리듀서는 반드시 순수 함수여야 합니다.  
    함수형 언어 분야에서 **순수 함수**는 다음 요건을 만족해야 합니다. 만약 다음 요건을 만족하지 않으면 **불순 함수**라고 하며, 다음 요건을 만족하지 않는 경우를 **부작용**이라고 합니다.
    - 함수 몸통에서 입력 매개변수의 값을 변경하지 않는다(즉, 입력 매개변수는 상수나 읽기 전용으로만 사용한다).
    - 함수는 함수 몸통에서 만들어진 결과를 즉시 반환한다.
    - 함수 내부에 전역 변수나 정적 변수를 사용하지 않는다.
    - 함수가 예외를 발생시키지 않는다.
    - 함수가 콜백 함수 형태로 구현되어 있거나, 함수 몸통에 콜백 함수를 사용하는 코드가 없다.
    - 함수 몸통에 Promise처럼 비동기 방식으로 동작하는 코드가 없다.

### 🔍 리덕스 미들웨어 이해하기

리덕스 미들웨어는 리듀서가 반드시 순수 함수여야 한다는 조건을 보완해 주는 방법입니다.

- #### 리덕스 미들웨어란?

  리듀서는 순수 함수여야 하기 때문에 함수 몸통에서는 부작용을 일으키는 코드를 사용할 수 없습니다. 그런데 이 점은 리덕스 기능을 사용하는 컴포넌트를 복잡하게 만듭니다.  
  다음 그림에서 보듯 리덕스 미들웨어는 리듀서 앞 단에서 부작용이 있는 코드들을 실행하여 얻은 결과를 리듀서 쪽으로 넘겨주는 역할을 합니다.

  ```mermaid
  flowchart LR
  A["dispatch(액션)"] --> B[미들웨어] --> C[리듀서] --> D[리덕스 저장소];
  ```

  리덕스 미들웨어는 다음 형태의 2차 고차 함수입니다.

  ```javascript
  import { Action, Dispatch } from "redux";

  export function someMiddleware<S = any>({
    dispatch: Dispatch,
    getState,
  }: {
    getState: () => S,
  }) {
    return (next: Dispatch) => (action: Action) => {
      const returnValue = next(action);
      return returnValue;
    };
  }
  ```

  여기서 Dispatch는 useDispatch 훅으로 얻을 수 있는 `dispatch()` 함수의 타입과 같습니다. 그리고 리덕스 미들웨어는 항상 action을 매개변수로 받는 함수를 반환해야 합니다.  
  그런데 만일 미들웨어가 아무런 일도 안 한다면, 리덕스 저장소로 유입되는 모든 액션이 리듀서로 유입되지 못하므로, 리덕스는 자신의 기능을 정상적으로 수행할 수 없습니다. 따라서 미들웨어는 next가 반환한 액션을 반환해 다른 미들웨어도 함께 동작할 수 있게 해야 합니다.

- #### 썽크 미들웨어 알아보기
  redux-thunk 패키지는 가장 많이 사용되는 리덕스 미들웨어입니다.  
  앞서 리덕스 미들웨어가 2차 고차 함수라고 설명한 적이 있는데, 썽크는 action의 타입이 함수면 action을 함수로서 호출해 주는 기능을 추가한 미들웨어입니다.  
  이에 따라 썽크 미들웨어를 장착하면 다음처럼 dispatch 함수를 매개변수로 수신하는 함수 형태로 액션 생성기를 만들 수 있습니다.
  ```javascript
  const functionAction = (dispatch: Dispatch) => {
    dispatch(someAction);
  };
  ```
