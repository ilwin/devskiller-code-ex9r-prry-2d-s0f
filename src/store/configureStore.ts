import { configureStore } from '@reduxjs/toolkit';
import productsReducer from 'store/products/productsSlice';

export default configureStore({
    reducer: {
        products: productsReducer
    },
})