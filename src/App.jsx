import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Gallery from './pages/Gallery/Gallery'
import Container from './components/Container/Container'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
  <Container>
    <Navbar />
    <Routes>
      <Route path='/' element={<Gallery />} />
    </Routes>
  </Container>
  )
}

export default App
