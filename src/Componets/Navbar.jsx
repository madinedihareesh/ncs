import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navigation'>
            <ul>
                <Link to='/index' className="nav-link">
                <li>Home</li>
                </Link>
                <Link to='/products' className="nav-link">
                <li>Products</li>
                </Link>
                <Link to='/cart' className="nav-link">
                <li>Cart</li>
                </Link>
                <Link to='about' className="nav-link">
                <li>About us</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar