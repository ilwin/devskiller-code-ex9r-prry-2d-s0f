import React, { FC } from 'react';

import { IProductsList } from '../types';
import ProductCard from 'components/productCard/ProductCard';

const ProductsList: FC<IProductsList> = ({ products, onClick, deleteProduct, selectedId }) => {

    return (
        <div className='products-list'>
            {Object.values(products).map(({ id, imgSrc, name, description, price }) => (

                <ProductCard
                    key={id}
                    id={id}
                    className='product-preview'
                    imgSrc={imgSrc}
                    name={name}
                    description={description}
                    price={price}
                    button={<button data-product-id={id} onClick={() => deleteProduct(id)}>Delete</button>}
                    isSelected={id === selectedId}
                    onClick={onClick}
                />
            ))}
        </div>
    );
};

export default ProductsList;
