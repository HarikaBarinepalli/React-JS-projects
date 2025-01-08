import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Userdata from './Userdata'
import UserDashboard from './UserDashboard'

const UserPortal = () => {
  
  return (
    <>
             <Navbar />

        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Users/>} path='/users'/>
            <Route element={<Userdata/>} path='/userdata/:id'/>
            <Route element={<UserDashboard/>}path='/userdashboard'/>
        </Routes>
    </>
  )
}

export default UserPortal