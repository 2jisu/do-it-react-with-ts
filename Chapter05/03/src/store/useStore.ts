import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer'
import {useMemo} from 'react'
import logger from './logger'

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
  const middleware: any[] = []
  if (useLogger) {
    middleware.push(logger)
  }

  const store = configureStore({reducer: rootReducer, middleware})
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}