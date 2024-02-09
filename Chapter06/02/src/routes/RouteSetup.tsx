import {Route, Routes} from 'react-router-dom'
import NoMatch from './NoWatch'

export default function RouteSetup() {
  return (
    <Routes>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
