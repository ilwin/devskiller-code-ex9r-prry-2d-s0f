import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import ProductsList from './ProductsList';
import { IMyStore } from '../types';
import {getProducts, updateProducts} from 'store/products/productsSlice'
import {IProductAPI, IRootState} from "store/types";
import ProductCard from "components/productCard/ProductCard";
import './myStore.scss';


const MyStore: FC<IMyStore> = () => {
    const products = useSelector((state: IRootState) => state.products.products);
    const dispatch = useDispatch();
    const [selectedProduct, setSelectedProduct] = useState<IProductAPI | null>(null);
    useEffect(() => {
        dispatch(getProducts());
    }, []);

    useEffect(() => {
        const keys = Object.keys(products);
        if (!!keys.length) {
            if(!selectedProduct || !keys.includes(selectedProduct.id)){
                const firstToShow = products[keys[0]];
                setSelectedProduct(firstToShow);
            }
        } else if(selectedProduct) {
            setSelectedProduct(null);
        }
    }, [products]);

    const handleAddProduct = () => {
        // TODO
    };

    const handleSaveProduct = () => {
        // TODO
    };

    const handleDeleteProduct = (id: string) => {
        const tmp = {...products};
        delete tmp[id];
        dispatch(updateProducts(tmp));
    };



    const handleOnProductClick = (id: string) => {
       setSelectedProduct(products[id] || null);
    };

    // const addProductButton = (
    //     <button className='add-product-btn' onClick={handleAddProduct}>
    //         Add
    //     </button>
    // );

    // constיearchProduct = <input className='search-product' />; // TODO

    const sortButton = <select />; // TODO

    const saveButton = (
        <button className='save-product-btn' onClick={handleSaveProduct}>
            Save
        </button>
    );

    return (
        <div className='my-store'>
            <div className='products'>
                <div className='products-ops'>
                    {/*{addProductButton}*/}
                    {/*{searchProduct}*/}
                    {/*{sortButton}*/}
                </div>
                <ProductsList products={products} selectedId={selectedProduct?.id} onClick={handleOnProductClick} deleteProduct={handleDeleteProduct} />
                {/*<div className='pagination' />*/}
            </div>
            <div className='product-details'>
                <div className="spacer" />
                {selectedProduct && <ProductCard {...selectedProduct} className='product-edit' button={saveButton} />}
            </div>
        </div>
    );
};

export default MyStore;
