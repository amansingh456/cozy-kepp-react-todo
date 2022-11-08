import React from 'react'
import logo from "../Images/logo.png"
import "./Header.css"

const Header = () => {
  return (
    <>
        <div className='header'>
            <img className='logo' src={logo} alt="logo" />
            <h6>CozY KeeP</h6>
        </div>
    </>
  )
}

export default Header