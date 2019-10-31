import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './index.js'

import store from './store'

export default function AppWithStore(){
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}