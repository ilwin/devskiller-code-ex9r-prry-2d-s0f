import { createSlice } from '@reduxjs/toolkit';
import products from 'mocks/products';
import {IProductsModel} from "../types";

const productsInitialState: IProductsModel = {
    products: {},
    lastId: '4',
    productTemplate: {
        id: '',
        imgSrc: '',
        name: '',
        description: '',
        price: 0,
    },
}
export const productsSlice = createSlice({
    name: 'products',
    initialState: productsInitialState,
    reducers: {
        getProducts: (state) => {
            state.products = products;
        },
        updateProducts: (state, action) => {
            state.products = action.payload
        },
        addProduct: (state, action) => {
            state.products = {...state.products, [(parseInt(state.lastId) + 1).toString()]: action.payload};
            state.lastId = (parseInt(state.lastId) + 1).toString();
        }
    },
})

// Action creators are generated for each case reducer function
export const {getProducts, updateProducts} = productsSlice.actions;

export default productsSlice.reducer