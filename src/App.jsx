import { useState } from 'react'

import './App.css'
import Home from './Pages/home'
import About from './Pages/AboutUs'
import { Route, Routes } from 'react-router-dom'
import Toolbar from './components/Navigation/Toolbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toolbar />
    <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>
    </Routes>
     
      </>
  )
}

export default App
