import React from 'react'
import "./Header.css"

const Footer = () => {
    let year = new Date()
    year=year.getFullYear()
    // console.log(date.getFullYear())
  return (
    <>
    <footer>
        <p>©<span>{year}</span><span>-Aman Singh Rajawat</span></p>
    </footer>
    </>
  )
}

export default Footer