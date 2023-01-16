import React from 'react'
import { ArticlesItem } from './ArticlesItem'
import { articlesArray } from './articlesArray'
import './Articles.css'

export const Articles = ({ changeLikeState, likedArticles }) => {
    return (
        <>
            <h1>Articles</h1>
            <div className="row">
                {articlesArray.map(
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
