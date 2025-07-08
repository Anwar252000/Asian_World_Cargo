// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  
import Mainbanner from './Components/Mainbanner'
import About from './Components/About'
import BlogSphere from './Components/BlogSphere'
import Footer from './Components/Footer'
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Contact from './Components/contact';
import Contactbar from './Components/Contactbar';







const App = () => {
  return (
    <div>
      <Mainbanner />
      <About />
      <Services />
      <BlogSphere />
      <Aboutus />
      <Contactbar />
      <Contact />
      <Footer/>
      
    </div>
  )
}

export default App
