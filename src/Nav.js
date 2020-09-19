import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
 // addEventListener scroll 
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    // code will run once until next runs, so remove listener 
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="../images/Logonfx.png" alt="Netflix Logo"/>
      <img  className="nav__avatar" src="../images/User.png" alt="Netflix Logo"/>
    </div>
  )
}

export default Nav 
