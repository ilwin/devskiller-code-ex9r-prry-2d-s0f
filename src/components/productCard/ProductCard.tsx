import React, { FC } from 'react';
import cn from 'clsx';

import './productCard.scss';
import { IProductCard } from './types';

const ProductCard: FC<IProductCard> = ({ id, className, imgSrc, name, description, price, isSelected, button, onClick }) => {
    const handleClick = (id: string | undefined) => {
        if(onClick && id){
            onClick(id);
        }
    }
    return (
        <article id={id} className={cn('product-card-wrapper', className, {selected: isSelected})}>
            <div className='product-card-container'  onClick={() => handleClick(id )}>
                <div className='product-image'>
                    <img className='image' src={imgSrc} alt='product image' />
                </div>
                <div className="product-details">
                    <div className='name'>{name}</div>
                    <div className='description'>{description}</div>
                </div>
            </div>
            <div className='button-container'>{button}</div>
        </article>
    )
};

export default ProductCard;
