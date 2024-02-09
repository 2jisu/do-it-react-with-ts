import type {FC, PropsWithChildren} from 'react'
import {createContext, useContext} from 'react'
import {useWindowResize} from '../hooks'

type ContextType = {
  breakpoint: string // 공유 시키려는 데이터 속성
}
const defaultContextValue: ContextType = {
  breakpoint: '' // 공유 시키려는 데이터 속성 초기값
}
export const ResponsiveContext = createContext<ContextType>(defaultContextValue)

type ResponsiveProviderProps = {}
export const ResponsiveProvider: FC<PropsWithChildren<ResponsiveProviderProps>> = ({
  children,
  ...props
}) => {
  const [width] = useWindowResize()
  // prettier-ignore
  const breakpoint = width < 640 ? 'sm' : 
                     width < 768 ? 'md' : 
                     width < 1024 ? 'lg' : 
                     width < 1280 ? 'xl' : '2xl'

  const value = {
    breakpoint // breakpoint: breakpoint를 간결하게 구현한 것입니다.
  }
  return <ResponsiveContext.Provider value={value} children={children} />
}

export const useResponsive = () => {
  const {breakpoint} = useContext(ResponsiveContext)
  return breakpoint
}
