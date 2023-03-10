import React from 'react'
import { articlesArray } from 'components/Articles/articlesArray'
import { Articles } from 'components/Articles/Articles'
import './Main.css'
import { Route, Routes } from 'react-router-dom'
import { FavoritePage } from 'pages/FavoritePage/FavoritePage'
import { CategoriesPage } from 'pages/CategoriesPage/CategoriesPage'
import { MercedesPage } from 'pages/CategoriesPage/MercedesPage/MercedesPage'
import { FerrariPage } from 'pages/CategoriesPage/FerrariPage/FerrariPage'
import { AstonMartinPage } from 'pages/CategoriesPage/AstonMartinPage/AstonMartinPage'
import { AboutPage } from 'pages/AboutPage/AboutPage'
import { ArticlePage } from 'pages/ArticlePage/ArticlePage'

export const Main = ({
    changeLikeState,
    likedArticles,
    openArticle,
    activeArticle,
}) => {
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
                                openArticle={openArticle}
                            />
                        }
                    />
                    {articlesArray.map((article) => (
                        <Route
                            key={article.id}
                            path={'/articles/' + article.id}
                            element={
                                <ArticlePage
                                    activeArticle={activeArticle}
                                    articleId={article.id}
                                />
                            }
                        />
                    ))}
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
