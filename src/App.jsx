import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Homepage/Home'
import Video from './Pages/Video/Video'


function App() {

  const[sidebar, setSidebar] = useState(true)

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' exact element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' exact element={<Video />} /> 
      </Routes>
      
    </div>
  )
}

export default App
