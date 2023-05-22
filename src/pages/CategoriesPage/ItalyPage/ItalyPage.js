import React from 'react'
import { articlesArray } from 'components/Articles/articlesArray'
import { ArticlesItem } from 'components/Articles/ArticlesItem'

export const ItalyPage = ({ likedArticles, changeLikeState }) => {
    const checkCategoryItaly = (article) => {
        return article.category === 'Italy'
    }

    return (
        <>
            <h1>Italy</h1>
            <div className="row">
                {articlesArray
                    .filter(checkCategoryItaly)
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
