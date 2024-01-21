import React, { useState } from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  function togleNavbar() {
    setOpen(!open)

  }
  return (
    <div className='navbar'>
      <div className="nav">
        <h1>DEALERS</h1>
        <ul>
          <li><NavLink to={'/'}>HOME</NavLink></li>
          <li><NavLink to={'/add'}>ADD PAGE</NavLink></li>
          <li><NavLink to={'/basket'}>BASKET</NavLink></li>
          <li><NavLink to={'/wishlist'}>WISHLIST</NavLink></li>
        </ul>
      </div>

      <div className="bars">
        <div className="menu">
          <h1>DEALERS</h1>
          <i className='fa-solid fa-bars' onClick={togleNavbar}></i>
        </div>

        <ul className={`click ${open ? 'open' : ''}`}>
        <li><NavLink to={'/'}>HOME</NavLink></li>
        <li><NavLink to={'/add'}>ADD PAGE</NavLink></li>
        <li><NavLink to={'/basket'}>BASKET</NavLink></li>
        <li><NavLink to={'/wishlist'}>WISHLIST</NavLink></li>
      </ul>
      </div>

      






    </div>
  )
}

export default Navbar