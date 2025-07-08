// eslint-disable-next-line no-unused-vars
import React from 'react'
import Mainbanner from '../Components/Mainbanner'
import About from '../Components/About'
import BlogSphere from '../Components/BlogSphere'
import Blogpage from '../Components/Blogpage'
import Footer from '../Components/Footer'
import Services from '../Components/Services'

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Mainbanner />
      <About />
      
      <Services />
      <BlogSphere />
      <Blogpage />
      <Footer/>
    </div>
  )
}

export default Home
