import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/navbar.css'
import CartWidghet from '../CartWidghet/CartWidghet'

const NavBar = () => {
    return (
    <div className='navContainer'>
        <Link to={'/'}>
        <h1>Logo</h1>
        </Link>

        <ul>
            <li>
                <NavLink to={'/'}>Inicio</NavLink>
            </li>
            <li>
                <NavLink to={'/detalle'}>Tienda</NavLink>
            </li>
            <li>
                <NavLink to={'categoria/italia'}>Italia</NavLink>
            </li>
            <li>
                <NavLink to={'categoria/españa'}>España</NavLink>
            </li>
            <li>
                <NavLink to={'categoria/portugal'}>Portugal</NavLink>
            </li>
            <li>
                <NavLink to={'categoria/holanda'}>Holanda</NavLink>
            </li>

        </ul>

        <CartWidghet/>
    </div>
    )
}

export default NavBar