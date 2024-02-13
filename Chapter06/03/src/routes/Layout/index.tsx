import {Outlet} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}
