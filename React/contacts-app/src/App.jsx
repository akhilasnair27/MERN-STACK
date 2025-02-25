import React from 'react'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />



    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App