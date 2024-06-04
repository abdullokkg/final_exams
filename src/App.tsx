import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Header from "./components/Header"

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
