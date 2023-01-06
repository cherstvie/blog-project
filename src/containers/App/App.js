import { Footer } from 'containers/Footer/Footer'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import React from 'react'
import './App.css'
import './reset.css'
import './grid.css'

export const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
