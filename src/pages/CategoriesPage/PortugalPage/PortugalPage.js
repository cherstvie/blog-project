import React from 'react'
import { articlesArray } from 'components/Articles/articlesArray'
import { ArticlesItem } from 'components/Articles/ArticlesItem'

export const PortugalPage = ({ likedArticles, changeLikeState }) => {
    const checkCategoryPortugal = (article) => {
        return article.category === 'Portugal'
    }
    return (
        <>
            <h1>Portugal</h1>
            <div className="row">
                {articlesArray
                    .filter(checkCategoryPortugal)
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
