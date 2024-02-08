import {useEffect} from 'react'

export const useEventListener = (
  target: EventTarget | null,
  type: string,
  callback: EventListenerOrEventListenerObject | null
) => {
  useEffect(() => {
    if (target && callback) {
      target.addEventListener(type, callback)
      return () => target.removeEventListener(type, callback)
    }
  }, [target, type, callback])
}
