import React from 'react'
import { Articles } from 'components/Articles/Articles'
import './Main.css'
import { Route, Routes } from 'react-router-dom'
import { FavoritePage } from 'pages/FavoritePage/FavoritePage'

export const Main = ({ changeLikeState, likedArticles }) => {
    return (
        <div className="main">
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Articles
                                changeLikeState={changeLikeState}
                                likedArticles={likedArticles}
                            />
                        }
                    />
                    <Route
                        path="/favorites"
                        element={
                            <FavoritePage
                                changeLikeState={changeLikeState}
                                likedArticles={likedArticles}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    )
}
