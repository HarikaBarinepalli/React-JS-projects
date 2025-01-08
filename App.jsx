import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandinPage from './Components/LandinPage'
import UserPortal from './Components/UserPortal'
import Userdata from './Components/Userdata'
import Navbar from './Components/Navbar'


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<LandinPage/>} path='/'/>
            <Route element={<UserPortal/>} path='/userportal/*'/>
            <Route path="/userdata/:id" element={<Userdata />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
