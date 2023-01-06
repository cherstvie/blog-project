import React from 'react'
import { ArticlesItem } from './ArticlesItem'
import { articlesArray } from './articlesArray'
import './Articles.css'

export const Articles = () => {
    return (
        <div className="row">
            {articlesArray.map(({ id, title, description, image }) => (
                <ArticlesItem
                    id={id}
                    title={title}
                    description={description}
                    image={image}
                />
            ))}
        </div>
    )
}
