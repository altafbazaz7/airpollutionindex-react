import React from 'react'
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className='active'>Pollution Index</li>
        <li>Weather</li>
        <li>Traffic</li>
      </ul>
    </nav>
  )
}

export default Navbar
