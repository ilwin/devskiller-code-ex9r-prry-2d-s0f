import React, {FC, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import ProductsList from './ProductsList';
import { IMyStore } from '../types';
import {getProducts, updateProducts} from 'store/products/productsSlice'
import {IProductAPI, IRootState} from "store/types";
import ProductCard from "components/productCard/ProductCard";
import './myStore.scss';

const enum SORT_DIRECTIONS  {
    'ASC'= 'asc',
    'DESC'= 'desc'
}

const MyStore: FC<IMyStore> = () => {
    const products = useSelector((state: IRootState) => state.products.products);
    const dispatch = useDispatch();
    const [selectedProduct, setSelectedProduct] = useState<IProductAPI | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Array<IProductAPI>>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [searchTimeout, setSearchTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [sortDirection, setSortDirection] = useState<SORT_DIRECTIONS>(SORT_DIRECTIONS.ASC )
    useEffect(() => {
        dispatch(getProducts());
    }, []);

    useEffect(() => {
        filterProducts(searchText);
    }, [products]);

    useEffect(() => {
        console.log('filteredProducts', filteredProducts)
        const keys = Object.keys(filteredProducts);
        if (keys.length) {
            if(!selectedProduct || !keys.includes(selectedProduct.id)){
                const firstToShow = filteredProducts[0];
                setSelectedProduct(firstToShow);
            }
        } else if(selectedProduct) {
            setSelectedProduct(null);
        }
    }, [filteredProducts]);

    const handleDeleteProduct = (id: string) => {
        const tmp = {...products};
        delete tmp[id];
        dispatch(updateProducts(tmp));
    };

    const handleOnProductClick = (id: string) => {
       setSelectedProduct(products[id] || null);
    };

    const filterProducts = (searchText: string) => {
        if(searchText) {
            setFilteredProducts(Object.values(products)
                .filter(product => `${product.name.toLowerCase()}${product.description.toLowerCase()}`
                    .includes(searchText)))
        } else {
            setFilteredProducts([...Object.values(products)]);
        }
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value;
        setSearchText(search);
        if(searchTimeout) {
            clearTimeout(searchTimeout);
        }
        setSearchTimeout(setTimeout(() => {
            filterProducts(search);
        }, 300));
    }

    const handleSort = () => {
        setFilteredProducts(_.orderBy([...filteredProducts], 'name', sortDirection));
        setSortDirection(sortDirection => sortDirection === SORT_DIRECTIONS.ASC ?
            SORT_DIRECTIONS.DESC : SORT_DIRECTIONS.ASC);
    }

    const saveButton = (
        <button className='save-product-btn'>
            Save
        </button>
    );

    return (
        <div className='my-store'>
            <div className='products'>
                <div className='products-ops'>
                    {/*{addProductButton}*/}
                    <div>
                        <label htmlFor="search-input">Search Products: </label>
                        <input id="search-input" type="text" onChange={handleSearch} value={searchText}/>
                    </div>
                    <button onClick={handleSort}>{sortDirection}</button>
                </div>
                <ProductsList products={filteredProducts} selectedId={selectedProduct?.id} onClick={handleOnProductClick} deleteProduct={handleDeleteProduct} />
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
