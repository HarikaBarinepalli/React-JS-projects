import React, { useEffect, useRef, useState } from 'react'
import '../assets/style/landingpage.css'
import { useNavigate } from 'react-router-dom'
const LandinPage = () => {
    let navigate=useNavigate()
    let usernameIput=useRef()
    let passwordInput=useRef()
  
    let handleSubmit=(e)=>
    {
        e.preventDefault()
        let userInput=usernameIput.current
        let passInput=passwordInput.current
        if(userInput.value==='Harika@123' && passInput.value==='123')
        {
            navigate(`/userportal`)
        }
        else
        {
            userInput.style.cssText=`border:solid 2px red`
            passInput.style.cssText=`border:solid 2px red`
        }
    }
  return (
    <>
        <div className="landingpage">
            <div className="container">
                <h2>User Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter UserName' ref={usernameIput}/>
                    <input type="password" placeholder='Enter Password' ref={passwordInput}/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default LandinPage