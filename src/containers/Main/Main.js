import React from 'react'
import { Articles } from 'components/Articles/Articles'
import './Main.css'
import { Route, Routes } from 'react-router-dom'
import { FavoritePage } from 'pages/FavoritePage/FavoritePage'
import { CategoriesPage } from 'pages/CategoriesPage/CategoriesPage'
import { MercedesPage } from 'pages/CategoriesPage/MercedesPage/MercedesPage'
import { FerrariPage } from 'pages/CategoriesPage/FerrariPage/FerrariPage'
import { AstonMartinPage } from 'pages/CategoriesPage/AstonMartinPage/AstonMartinPage'
import { AboutPage } from 'pages/AboutPage/AboutPage'

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
                                likedArticles={likedArticles}
                                changeLikeState={changeLikeState}
                            />
                        }
                    />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route
                        path="/categories/mercedes"
                        element={
                            <MercedesPage
                                likedArticles={likedArticles}
                                changeLikeState={changeLikeState}
                            />
                        }
                    />
                    <Route
                        path="/categories/ferrari"
                        element={
                            <FerrariPage
                                likedArticles={likedArticles}
                                changeLikeState={changeLikeState}
                            />
                        }
                    />
                    <Route
                        path="/categories/aston-martin"
                        element={
                            <AstonMartinPage
                                likedArticles={likedArticles}
                                changeLikeState={changeLikeState}
                            />
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </div>
    )
}
