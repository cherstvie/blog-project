import React from 'react'

export const ArticlesItem = ({ id, title, description, image }) => {
    return (
        <>
            <form className="col-xs-12 col-md-6 col-lg-4">
                <div className="article-img">
                    <img src={image} alt="" />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <button type="button">Learn more</button>
            </form>
        </>
    )
}
