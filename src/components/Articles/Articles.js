import React from 'react'
import { ArticlesItem } from './ArticlesItem'
import { articlesArray } from './articlesArray'
import './Articles.css'

export const Articles = ({ changeLikeState, likedArticles }) => {
    return (
        <div className="row">
            {articlesArray.map(
                ({ id, title, category, description, image }) => (
                    <ArticlesItem
                        id={id}
                        title={title}
                        category={category}
                        description={description}
                        image={image}
                        changeLikeState={changeLikeState}
                        isLiked={likedArticles[id]}
                    />
                )
            )}
        </div>
    )
}
