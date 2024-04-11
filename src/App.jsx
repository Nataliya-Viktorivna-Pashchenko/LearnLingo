import { NavLink, Route, Routes } from "react-router-dom"
import './index.css'
import Layout from "./components/Layout/Layout"
import { Suspense, lazy} from "react"


const Home = lazy(() => import('./pages/Home/Home'));
const Teachers = lazy(() => import('./pages/Teachers/Teachers'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));


function App() {

  return (
    <Layout>
      <Suspense fallback={<Layout />}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/favorites" element={<Favorites/> } />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
