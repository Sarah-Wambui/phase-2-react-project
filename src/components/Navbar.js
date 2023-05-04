import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar() {

  const linkStyles = {
    backgroundColor: "green",
    textAlign: "center",
    marginLeft:"10px",
  }

  return (
    <nav style={{display: "flex"}} >
      <NavLink to="/" style={linkStyles}>Home</NavLink>
      <NavLink to="/articlelist" style={linkStyles} >Articles</NavLink>
      <NavLink to="/comments" style={linkStyles} >Comments</NavLink>

    </nav>
  )
}
export default NavBar