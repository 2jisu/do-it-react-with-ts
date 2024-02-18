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
      return {...state, email: action.payload}
    case '@remoteUser/changePicture':
      return {...state, email: action.payload}
  }
  return state //필수
}
