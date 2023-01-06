import React from 'react'
import { Articles } from 'components/Articles/Articles'
import './Main.css'

export const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <Articles />
            </div>
        </div>
    )
}
