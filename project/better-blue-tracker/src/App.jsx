import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Current from './pages/Current'
import Basketball from './Pages/basketball'
import Football from './Pages/football'
import Individual from './Pages/individual'
import Team from './Pages/team'
import Cadeau from './Pages/cadeau'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/currentseason' element={<Current />}/>
          <Route path='/basketball' element={<Basketball />}/>
          <Route path='/football' element={<Football />}/>
          <Route path='/individual' element={<Individual />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/cadeau' element={<Cadeau />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
