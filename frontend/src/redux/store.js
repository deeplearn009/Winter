import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './reducers/cardSlice.js'
import basketSlice from './reducers/basketSlice.js'

export const store = configureStore({
    reducer: {
        card: cardSlice,
        basket: basketSlice
    }
})