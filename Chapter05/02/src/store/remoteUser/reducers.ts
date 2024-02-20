import * as T from './types'

const initialState: T.State = {
  email: '',
  name: {title: '', first: '', last: ''},
  picture: {large: ''}
}

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@remoteUser/setUser':
      return action.payload
    case '@remoteUser/changeEmail':
      return {...state, email: action.payload}
    case '@remoteUser/changeName':
      return {...state, name: action.payload}
    case '@remoteUser/changePicture':
      return {...state, picture: action.payload}
  }
  return state //필수 -> 리듀서는 순수 함수여야 하므로 자신의 것이 아닌 액션이 유입될 때도 항상 자신의 현재 상태를 반환해 줘야 하기 때문
}
