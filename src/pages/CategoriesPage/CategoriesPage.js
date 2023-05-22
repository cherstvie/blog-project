import React from 'react'
import { Link } from 'react-router-dom'

export const CategoriesPage = () => {
    return (
        <>
            <h1>Choose category</h1>
            <div className="category-row">
                <Link to="/categories/spain">
                    <div className="categories-btn">Spain</div>
                </Link>
                <Link to="/categories/france">
                    <div className="categories-btn">France</div>
                </Link>
                <Link to="/categories/italy">
                    <div className="categories-btn">Italy</div>
                </Link>
                <Link to="/categories/portugal">
                    <div className="categories-btn">Portugal</div>
                </Link>
            </div>
        </>
    )
}
