import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'
import LoggerTest from './pages/LoggerTest'
import LoadingTest from './pages/LoadingTest'
import ErrorMessageTest from './pages/ErrorMessageTest'
import FetchTest from './pages/FetchTest'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <FetchTest />
      <ErrorMessageTest />
      <LoadingTest />
      <LoggerTest />
    </ReduxProvider>
  )
}
