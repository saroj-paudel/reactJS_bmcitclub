import { useState } from 'react'

import './App.css'
import Home from './Pages/home'
import About from './Pages/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <About />
      </>
  )
}

export default App
