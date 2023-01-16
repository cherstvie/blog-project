import { articlesArray } from 'components/Articles/articlesArray'
import React from 'react'
import { Like } from 'components/Like/Like'
import { Dislike } from 'components/Like/Dislike'

export const FavoritePage = ({ likedArticles, changeLikeState }) => {
    const articlesObject = articlesArray.reduce(
        (obj, article) => ({ ...obj, [article.id]: article }),
        {}
    )

    return (
        <>
            <h1>Favorites</h1>
            <div className="row">
                {Object.keys(likedArticles).map((articleId) => (
                    <form
                        key={articleId}
                        className="col-xs-12 col-md-6 col-lg-4"
                    >
                        <img
                            className="form-field"
                            src={articlesObject[articleId].image}
                        ></img>
                        <div className="form-field orange-btn">
                            {articlesObject[articleId].category}
                        </div>
                        <div
                            className="form-field"
                            onClick={() =>
                                changeLikeState(articlesObject[articleId].id)
                            }
                        >
                            {likedArticles[articleId] === true ? (
                                <Like />
                            ) : (
                                <Dislike />
                            )}
                        </div>
                    </form>
                ))}
            </div>
        </>
    )
}
