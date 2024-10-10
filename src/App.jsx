import React, { Children } from 'react'
import { BioProvider , BioContext } from './contexts'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <> 
      <BioProvider>
         <Contact/>
         <About/>
         <Home/>
      </BioProvider>
    </>
  )
}

export default App
