import React from 'react'
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
                <li className="orange-btn">
                    <a href="">Home</a>
                </li>
                <li className="orange-btn">
                    <a href="">Favorites</a>
                </li>
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
