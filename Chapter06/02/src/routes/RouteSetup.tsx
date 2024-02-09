import {Route, Routes} from 'react-router-dom'
import NoMatch from './NoWatch'
import Layout from './Layout'
import Board from '../pages/Board'
import LandingPage from './LandingPage'

export default function RouteSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
