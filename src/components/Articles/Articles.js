import React from 'react'
import { ArticlesItem } from './ArticlesItem'
import { articlesArray } from './articlesArray'
import './Articles.css'
import ArticlesSlider from 'components/ArticlesSlider/ArticlesSlider'

export const Articles = ({ changeLikeState, likedArticles, openArticle }) => {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesSlider />
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
                            openArticle={openArticle}
                        />
                    )
                )}
            </div>
        </>
    )
}
