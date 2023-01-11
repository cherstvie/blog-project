import React from 'react'
import { Articles } from 'components/Articles/Articles'
import './Main.css'

export const Main = ({ changeLikeState, likedArticles }) => {
    return (
        <div className="main">
            <div className="container">
                <Articles
                    changeLikeState={changeLikeState}
                    likedArticles={likedArticles}
                />
            </div>
        </div>
    )
}
