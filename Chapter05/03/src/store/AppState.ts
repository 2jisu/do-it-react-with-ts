import * as L from './loading'
import * as E from './errorMessage'
import * as F from './fetchUser'

export type AppState = {
  loading: L.State
  errorMessage: E.State
  fetchUser: F.State
}
