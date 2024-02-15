import ReduxClock from './pages/ReduxClock'
import UseReducerClock from './pages/UseReducerClock'
import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <main className="p-8">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}
