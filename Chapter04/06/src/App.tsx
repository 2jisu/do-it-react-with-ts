import {ResponsiveProvider} from './contexts'
import ResponsiveContextTest from './pages/ResponsiveContextTest'

export default function App() {
  return (
    <ResponsiveProvider>
      <main>
        <ResponsiveContextTest />
      </main>
    </ResponsiveProvider>
  )
}
