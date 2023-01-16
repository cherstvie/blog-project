import React from 'react'
import { Link } from 'react-router-dom'

export const CategoriesPage = () => {
    return (
        <>
            <h1>Choose category</h1>
            <div className="category-row">
                <Link to="/categories/mercedes">
                    <div className="categories-btn">Mercedes</div>
                </Link>
                <Link to="/categories/ferrari">
                    <div className="categories-btn">Ferrari</div>
                </Link>
                <Link to="/categories/aston-martin">
                    <div className="categories-btn">Aston Martin</div>
                </Link>
            </div>
        </>
    )
}
