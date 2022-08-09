import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import {store} from './store/store'

import {Layout} from './components/Layout'

import './sass/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Layout />
    </Provider>
)
