import React from 'react'
import {
    getArticlesObject,
    articlesArray,
} from 'components/Articles/articlesArray'
import { Link } from 'react-router-dom'

export const ArticlePage = ({ activeArticle, articleId }) => {
    const articlesObject = getArticlesObject(articlesArray)

    if (activeArticle === 0) {
        activeArticle = articleId
    }
    return (
        <>
            <h1>ARTICLE</h1>
            <div className="article-form">
                <img src={articlesObject[activeArticle].image} alt="" />
                <h3 className="article-title">
                    {articlesObject[activeArticle].title}
                </h3>
                <Link
                    to={
                        '/categories/' +
                        articlesObject[activeArticle].categoryLink
                    }
                >
                    <div className="category-btn">
                        {articlesObject[activeArticle].category}
                    </div>
                </Link>
                <div
                    className="article-description"
                    dangerouslySetInnerHTML={{
                        __html: articlesObject[activeArticle].fullDescription,
                    }}
                ></div>
                <Link to="/">
                    <button className="back-btn" type="button">
                        Back home
                    </button>
                </Link>
            </div>
        </>
    )
}
