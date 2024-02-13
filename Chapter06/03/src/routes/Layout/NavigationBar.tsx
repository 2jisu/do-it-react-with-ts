import {Link as RPLink} from 'react-router-dom'
import {Link} from '../../components'
import {useAuth} from '../../contexts'

export default function NavigationBar() {
  const {loggedUser} = useAuth()

  return (
    <div className="flex justify-between bg-base-100">
      <div className="flex p-2 navbar">
        <Link to="/">Home</Link>
        {loggedUser && (
          <Link to="/board" className="ml-4">
            Board
          </Link>
        )}
      </div>
      <div className="flex items-center p-2">
        {!loggedUser && (
          <RPLink to="/login" className="btn btn-sm btn-primary">
            Login
          </RPLink>
        )}
        {!loggedUser && (
          <RPLink to="/signup" className="ml-4 btn btn-sm btn-outline btn-primary">
            Signup
          </RPLink>
        )}
        {loggedUser && (
          <RPLink to="/logout" className="ml-4 mr-4">
            LOGOUT
          </RPLink>
        )}
      </div>
    </div>
  )
}
