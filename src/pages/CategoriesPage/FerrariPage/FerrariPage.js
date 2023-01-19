import React from 'react'
import { articlesArray } from 'components/Articles/articlesArray'
import { ArticlesItem } from 'components/Articles/ArticlesItem'

export const FerrariPage = ({ likedArticles, changeLikeState }) => {
    const checkCategoryFerrari = (article) => {
        return article.category === 'Ferrari'
    }
    return (
        <>
            <h1>Aston Martin</h1>
            <div className="row">
                {articlesArray
                    .filter(checkCategoryFerrari)
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
