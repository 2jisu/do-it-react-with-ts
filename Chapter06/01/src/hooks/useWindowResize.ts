import {useState, useEffect} from 'react'
import {useEventListener} from './useEventListener'

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0])

  useEffect(() => {
    setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
  }, []) // 컴포넌트가 마운트될 때의 윈도우 크기 설정

  useEventListener(window, 'resize', () => {
    setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
  }) // 윈도우 크기가 변경될 때마다 변경된 윈도우 크기 설정

  return widthHeight
}
