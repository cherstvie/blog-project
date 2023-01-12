import React from 'react'
import { articlesArray } from 'components/Articles/articlesArray'
import { ArticlesItem } from 'components/Articles/ArticlesItem'

export const FavoritePage = ({ changeLikeState, likedArticles }) => {
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
