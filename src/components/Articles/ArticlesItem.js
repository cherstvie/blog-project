import React from 'react'
import { Like } from 'components/Like/Like'
import { Dislike } from 'components/Like/Dislike'
import { Link } from 'react-router-dom'

export const ArticlesItem = ({
    id,
    title,
    category,
    categoryLink,
    description,
    image,
    changeLikeState,
    isLiked,
}) => {
    return (
        <>
            <form className="col-xs-12 col-md-6 col-lg-4">
                <div className="article-img">
                    <img src={image} alt="" />
                </div>
                <Link to={'/categories/' + categoryLink}>
                    <button type="button" className="category-btn">
                        {category}
                    </button>
                </Link>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="article-btns">
                    <button type="button" onClick={() => changeLikeState(id)}>
                        {isLiked ? <Like /> : <Dislike />}
                    </button>
                    <button type="button" className="more-btn">
                        Learn more
                    </button>
                </div>
            </form>
        </>
    )
}
