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
                            <NavLink to="/categories/spain">
                                <li className="orange-btn">Spain</li>
                            </NavLink>
                            <NavLink to="/categories/france">
                                <li className="orange-btn">France</li>
                            </NavLink>
                            <NavLink to="/categories/italy">
                                <li className="orange-btn">Italy</li>
                            </NavLink>
                            <NavLink to="/categories/portugal">
                                <li className="orange-btn">Portugal</li>
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
