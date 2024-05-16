import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import Courses from './pages/Courses/Courses'
import Docs from './pages/Docs/Docs'
import Footer from './components/Footer/Footer'
import Video from './pages/Video/Video'
import Roadmaps from './pages/Roadmaps/Roadmaps';
import Carrer from './pages/carrer/Carrer';
import Contact from './pages/Contact/Contact'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/docs" element={<Docs/>}/>
        <Route path="/video/:id" element={<Video/>}/>
        <Route path="/roadmaps" element={<Roadmaps/>}/>
        <Route path="/carrer/:tech" element={<Carrer/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App