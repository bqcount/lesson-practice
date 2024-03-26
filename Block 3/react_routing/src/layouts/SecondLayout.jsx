import { Outlet } from 'react-router-dom'
// import Footer from '../components/Footer'
import Aside from '../components/Aside'

function SecondLayout() {
  return (
    <>
      <Aside />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default SecondLayout
