import { configureStore } from '@reduxjs/toolkit';
import productsReducer from 'store/products/productsSlice';
import settingsReducer from 'store/settings/settingsSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        settings: settingsReducer
    },
})