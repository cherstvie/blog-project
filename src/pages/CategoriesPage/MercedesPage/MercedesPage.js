import React from 'react'
import { articlesArray } from 'components/Articles/articlesArray'
import { ArticlesItem } from 'components/Articles/ArticlesItem'

export const MercedesPage = ({ likedArticles, changeLikeState }) => {
    const checkCategoryMercedes = (article) => {
        return article.category === 'Mercedes-Benz'
    }

    return (
        <>
            <h1>Mercedes</h1>
            <div className="row">
                {articlesArray
                    .filter(checkCategoryMercedes)
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
