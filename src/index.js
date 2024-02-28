import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import AppProvider from './context/AppContext'

import App from './App'

import './styles/index.css'

const rootView = document.getElementById('root')

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </React.StrictMode>
    ,
    rootView
  )
}
