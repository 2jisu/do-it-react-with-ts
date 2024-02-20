import {combineReducers} from 'redux'
import * as L from './loading'
import * as E from './errorMessage'
import * as F from './fetchUser'

export const rootReducer = combineReducers({
  loading: L.reducer,
  errorMessage: E.reducer,
  fetchUser: F.reducer
})
