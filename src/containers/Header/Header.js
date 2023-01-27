import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export const Header = ({ openSlideOutMenu }) => {
    return (
        <div className="header">
            <div className="nav-bar">
                <div className="navigation" onClick={openSlideOutMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="logo">
                <Link to="/">Cherstvie</Link>
            </div>

            <ul className="menu">
                <NavLink to="/">
                    <li className="orange-btn">Home</li>
                </NavLink>
                <NavLink to="/favorites">
                    <li className="orange-btn">Favorites</li>
                </NavLink>
                <NavLink to="/categories">
                    <li className="orange-btn">
                        Categories
                        <ul className="submenu">
                            <NavLink to="/categories/mercedes">
                                <li className="orange-btn">Mercedes</li>
                            </NavLink>
                            <NavLink to="/categories/ferrari">
                                <li className="orange-btn">Ferrari</li>
                            </NavLink>
                            <NavLink to="/categories/aston-martin">
                                <li className="orange-btn">Aston Martin</li>
                            </NavLink>
                        </ul>
                    </li>
                </NavLink>
                <NavLink to="/about">
                    <li className="orange-btn">About</li>
                </NavLink>
            </ul>
        </div>
    )
}
