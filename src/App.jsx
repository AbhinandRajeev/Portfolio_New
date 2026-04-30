import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import CursorTrailCanvas from "./components/Cursor";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {


  return (
    <>
      <ScrollToTop />
      <CursorTrailCanvas
        color="#0d9488"
        className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
