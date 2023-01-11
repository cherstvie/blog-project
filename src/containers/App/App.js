import { Footer } from 'containers/Footer/Footer'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import React, { useState } from 'react'
import './App.css'
import './grid.css'

export const App = () => {
    const [likedArticles, setLikedArticles] = useState({})

    const changeLikeState = (id) => {
        setLikedArticles((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    return (
        <>
            <Header />
            <Main
                changeLikeState={changeLikeState}
                likedArticles={likedArticles}
            />
            <Footer />
        </>
    )
}
