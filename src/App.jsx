
import './assets/css/app.css'
import { TopBar } from './components/TopBar'
import { Footer } from './components/Footer'
import { SiderBar } from './components/SiderBar'
import { TablesMovies } from './pages/movies-list-page'
import { ContentRowTop } from './pages/home-admin-page'

function App() {

  return (
    <div id="wrapper">

      <SiderBar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />

          <div className="container-fluid">
            <ContentRowTop/>
            <TablesMovies />
          </div>
        </div>
        <Footer />

      </div>


    </div>
  )
}

export default App
