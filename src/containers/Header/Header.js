import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
        <div className="header">
            <div className="nav-bar">
                <div className="navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="logo">Cherstvie</div>
            <ul className="menu">
                <NavLink to="/">
                    <li className="orange-btn">Home</li>
                </NavLink>
                <NavLink to="/favorites">
                    <li className="orange-btn">Favorites</li>
                </NavLink>
                <li className="orange-btn">
                    <a href="">Categories</a>
                    <ul className="submenu">
                        <li className="orange-btn">
                            <a href="">cat1</a>
                        </li>
                        <li className="orange-btn">
                            <a href="">cat2</a>
                        </li>
                        <li className="orange-btn">
                            <a href="">cat3</a>
                        </li>
                    </ul>
                </li>
                <li className="orange-btn">
                    <a href="">About</a>
                </li>
            </ul>
        </div>
    )
}
