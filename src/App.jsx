import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Watch' element={<Watch />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
