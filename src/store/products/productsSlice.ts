import { createSlice } from '@reduxjs/toolkit';
import products from 'mocks/products';
import {IProductsModel} from "../types";

const productsInitialState: IProductsModel = {
    products: {}
}
export const productsSlice = createSlice({
    name: 'products',
    initialState: productsInitialState,
    reducers: {
        getProducts: (state) => {
            state.products = products
        },
        updateProducts: (state, action) => {
            console.log(action.payload)
            state.products = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {getProducts, updateProducts} = productsSlice.actions;

export default productsSlice.reducer