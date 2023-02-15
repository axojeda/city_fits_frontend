
import './App.css';
import Navbar from './components/NavBar/Navbar';
import OutfitCreator from './components/OutfitCreator/OutfitCreator'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import OutfitMap from './components/OutfitMapPage/OutfitMap';
import './components/Home/Home.scss'


// Routes will go there, but we should do this at the end.
function App() {
  return (
    <div>
      <Router >
        <Navbar />
          <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/OutfitCreator' element={<OutfitCreator />} />
              <Route path='/OutfitMap' element={<OutfitMap />} />
              <Route path='/LogIn' element={<LogIn />} />
          </Routes>
        </Router>
    </div>
  )
}

// We passed entire components for now.
export default App;
