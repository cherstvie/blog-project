import React from 'react'
import { articlesArray } from 'components/Articles/articlesArray'
import { ArticlesItem } from 'components/Articles/ArticlesItem'

export const FrancePage = ({ likedArticles, changeLikeState }) => {
    const checkCategoryFrance = (article) => {
        return article.category === 'France'
    }
    return (
        <>
            <h1>France</h1>
            <div className="row">
                {articlesArray
                    .filter(checkCategoryFrance)
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
