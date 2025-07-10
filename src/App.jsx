import { useState } from 'react'

import './App.css'
import Home from './Pages/home'
import About from './Pages/AboutUs'
import { Route, Routes } from 'react-router-dom'
import Toolbar from './components/Navigation/Toolbar'
import PageNotFound from './Pages/PajeNotFound'
import CardDetails from './Pages/CardDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toolbar />
    <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/card/:id' element={<CardDetails/>}/>
 <Route path='*' element={<PageNotFound />}/>

    </Routes>
     
      </>
  )
}

export default App
