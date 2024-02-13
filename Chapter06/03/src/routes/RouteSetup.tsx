import {Route, Routes} from 'react-router-dom'
import NoMatch from './NoWatch'
import Layout from './Layout'
import Board from '../pages/Board'
import LandingPage from './LandingPage'
import SignUp from './Auth/SignUp'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import RequireAuth from './Auth/RequireAuth'

export default function RouteSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route
          path="/board"
          element={
            <RequireAuth>
              <Board />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/logout"
        element={
          <RequireAuth>
            <Logout />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
