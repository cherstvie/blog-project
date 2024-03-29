import { articlesArray } from 'components/Articles/articlesArray'
import React from 'react'
import { Like } from 'components/Like/Like'
import { Dislike } from 'components/Like/Dislike'
import { Link } from 'react-router-dom'

export const FavoritePage = ({
    likedArticles,
    changeLikeState,
    openArticle,
}) => {
    const articlesObject = articlesArray.reduce(
        (obj, article) => ({ ...obj, [article.id]: article }),
        {}
    )

    if (Object.keys(likedArticles).length === 0) {
        return (
            <>
                <h1>There are no liked articles.</h1>
            </>
        )
    } else {
        return (
            <>
                <h1>Favorites</h1>
                <div className="row">
                    {Object.keys(likedArticles).map((articleId) => (
                        <form
                            key={articleId}
                            className="col-xs-12 col-md-6 col-lg-4"
                        >
                            <div className="form-outline">
                                <img
                                    src={articlesObject[articleId].image}
                                    alt=""
                                ></img>
                                <div className="form-title">
                                    {articlesObject[articleId].title}
                                </div>
                                <div className="form-wrapper">
                                    <div
                                        className="form-field"
                                        onClick={() =>
                                            changeLikeState(
                                                articlesObject[articleId].id
                                            )
                                        }
                                    >
                                        {likedArticles[articleId] === true ? (
                                            <Like />
                                        ) : (
                                            <Dislike />
                                        )}
                                    </div>
                                    <Link
                                        to={
                                            '/categories/' +
                                            articlesObject[articleId]
                                                .categoryLink
                                        }
                                    >
                                        <div className="form-field orange-btn">
                                            {articlesObject[articleId].category}
                                        </div>
                                    </Link>
                                    <Link
                                        to={
                                            '/articles/' +
                                            articlesObject[articleId].id
                                        }
                                    >
                                        <button
                                            type="button"
                                            className="more-btn"
                                            onClick={() =>
                                                openArticle(
                                                    articlesObject[articleId].id
                                                )
                                            }
                                        >
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    ))}
                </div>
            </>
        )
    }
}
