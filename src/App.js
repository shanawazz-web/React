// ! COmponent composition
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from '/components/Sidebar2'
import Footer from './components/Footer'
const App = () => {
  return (
    <div classname='app'>
      <Navbar/>
      <Main/>
      <div classname='sidebar'>
        <Sidebar1/>
        <Sidebar2/>
      </div>
      <Footer/>
    </div>
  )
}

export default App