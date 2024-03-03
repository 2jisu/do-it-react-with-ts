import {Dispatch} from 'redux'
import {setLoading} from './actions'

// 썽크 액션
export const doTimedLoading =
  (duration: number = 3 * 1000) =>
  (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    const timerId = setTimeout(() => {
      clearTimeout(timerId)
      dispatch(setLoading(false))
    }, duration)
  }
