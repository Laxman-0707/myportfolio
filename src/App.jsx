import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Project from './components/pages/Project';
import Certification from './components/pages/Certification';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';


const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/project' element={<Project />} />
            <Route path='/certification' element={<Certification />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
