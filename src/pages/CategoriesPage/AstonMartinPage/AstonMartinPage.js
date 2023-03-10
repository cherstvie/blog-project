import React from 'react'
import { articlesArray } from 'components/Articles/articlesArray'
import { ArticlesItem } from 'components/Articles/ArticlesItem'

export const AstonMartinPage = ({ likedArticles, changeLikeState }) => {
    const checkCategoryAstonMartin = (article) => {
        return article.category === 'Aston Martin'
    }
    return (
        <>
            <h1>Aston Martin</h1>
            <div className="row">
                {articlesArray
                    .filter(checkCategoryAstonMartin)
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
