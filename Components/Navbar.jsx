import React from 'react'
import '../assets/style/navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="logo">
              <img src="https://cdn.pixabay.com/photo/2024/02/19/02/02/login-8582364_640.png" alt=""  height={80} />
            </div>
           <div className="links">
                <ul>
                    <li><NavLink to='/userportal/'>Home</NavLink></li>
                    <li><NavLink to='/userportal/users'>Users</NavLink></li>
                    <li><NavLink to='/'>LogOut</NavLink></li>
                </ul>
           </div>
        </div>
    </>
  )
}

export default Navbar