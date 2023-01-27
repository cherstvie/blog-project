import React from 'react'
import { Link } from 'react-router-dom'
import './SlideOutMenu.css'

export const SlideOutMenu = ({ openSlideOutMenu }) => {
    return (
        <div className="slide-out-menu">
            <div className="close-btn" onClick={openSlideOutMenu}>
                <span></span>
                <span></span>
            </div>
            <div className="wrapper">
                <Link to="/">
                    <div
                        className="slide-out-menu-logo"
                        onClick={openSlideOutMenu}
                    >
                        Cherstvie
                    </div>
                </Link>
                <Link to="/">
                    <div
                        className="home slide-out-menu-btn"
                        onClick={openSlideOutMenu}
                    >
                        HOME
                    </div>
                </Link>
                <Link to="/favorites">
                    <div
                        className="favorites slide-out-menu-btn"
                        onClick={openSlideOutMenu}
                    >
                        FAVORITES
                    </div>
                </Link>
                <Link to="/categories">
                    <div
                        className="categories slide-out-menu-btn"
                        onClick={openSlideOutMenu}
                    >
                        CATEGORIES
                    </div>
                </Link>
                <Link to="/about">
                    <div
                        className="about slide-out-menu-btn"
                        onClick={openSlideOutMenu}
                    >
                        ABOUT
                    </div>
                </Link>
            </div>
            <div className="development">Development version</div>
        </div>
    )
}
