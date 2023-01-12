import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from 'containers/App/App'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
