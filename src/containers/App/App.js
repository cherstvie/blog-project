import { Footer } from 'containers/Footer/Footer'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import React, { useState } from 'react'
import './App.css'
import './grid.css'
import { SlideOutMenu } from 'components/SlideOutMenu/SlideOutMenu'

export const App = () => {
    const [likedArticles, setLikedArticles] = useState({})
    const [activeArticle, setActiveArticle] = useState(0)

    const changeLikeState = (id) => {
        setLikedArticles((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    const openArticle = (id) => {
        setActiveArticle(id)
    }

    const openSlideOutMenu = () => {
        const slideOutMenu = document.querySelector('.slide-out-menu')
        slideOutMenu.classList.toggle('open')
        if (slideOutMenu.classList.contains('open')) {
            slideOutMenu.classList.add('open')
        } else {
            slideOutMenu.classList.remove('open')
        }
    }

    return (
        <>
            <SlideOutMenu openSlideOutMenu={openSlideOutMenu} />
            <Header openSlideOutMenu={openSlideOutMenu} />
            <Main
                changeLikeState={changeLikeState}
                likedArticles={likedArticles}
                openArticle={openArticle}
                activeArticle={activeArticle}
            />
            <Footer />
        </>
    )
}
