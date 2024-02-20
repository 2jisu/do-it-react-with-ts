import * as T from './types'

const initialState: T.State = []

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@cards/addCard':
      return [action.payload, ...state]
    case '@cards/removeCard':
      return state.filter(card => card.uuid !== action.payload)
  }
  return state //필수 -> 리듀서는 순수 함수여야 하므로 자신의 것이 아닌 액션이 유입될 때도 항상 자신의 현재 상태를 반환해 줘야 하기 때문
}
