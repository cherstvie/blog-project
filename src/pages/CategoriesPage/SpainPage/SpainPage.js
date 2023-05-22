import React from 'react'
import { articlesArray } from 'components/Articles/articlesArray'
import { ArticlesItem } from 'components/Articles/ArticlesItem'

export const SpainPage = ({ likedArticles, changeLikeState }) => {
    const checkCategorySpain = (article) => {
        return article.category === 'Spain'
    }

    return (
        <>
            <h1>Spain</h1>
            <div className="row">
                {articlesArray
                    .filter(checkCategorySpain)
                    .map(
                        ({
                            id,
                            title,
                            category,
                            categoryLink,
                            description,
                            image,
                        }) => (
                            <ArticlesItem
                                key={id}
                                id={id}
                                title={title}
                                category={category}
                                categoryLink={categoryLink}
                                description={description}
                                image={image}
                                changeLikeState={changeLikeState}
                                isLiked={likedArticles[id]}
                            />
                        )
                    )}
            </div>
        </>
    )
}
