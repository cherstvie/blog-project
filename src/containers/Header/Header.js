import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <div className="header">
            <div className="nav-bar">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="logo">Cherstvie</div>
            <div className="menu">
                <div className="orange-btn">Home</div>
                <div className="orange-btn">Favorites</div>
                <div className="orange-btn">Categories</div>
                <div className="orange-btn">About</div>
            </div>
        </div>
    )
}
