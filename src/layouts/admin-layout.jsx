
import '../assets/css/app.css'
import { TopBar } from '../components/TopBar'
import { Footer } from '../components/Footer'
import { SiderBar } from '../components/SiderBar'
import { Outlet } from 'react-router-dom'


function AdminLayout() {

  return (
    <div id="wrapper">

      <SiderBar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />

          <div className="container-fluid">
            <Outlet/>
          </div>
        </div>
        <Footer />

      </div>


    </div>
  )
}

export default AdminLayout
