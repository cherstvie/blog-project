import { Footer } from 'containers/Footer/Footer'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import React, { useState } from 'react'
import './App.css'
import './grid.css'
import { SlideOutMenu } from 'components/SlideOutMenu/SlideOutMenu'

export const App = () => {
    const [likedArticles, setLikedArticles] = useState({})

    const changeLikeState = (id) => {
        setLikedArticles((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    let slideOutMenu = document.querySelector('.slide-out-menu')
    const openSlideOutMenu = () => {
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
            />
            <Footer />
        </>
    )
}
