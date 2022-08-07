import {IProductAPI} from "../store/types";

const products: Record<string, IProductAPI> = {
    '1': {
        id: '1',
        imgSrc: 'products/fabric-gold-color-cloth-flowing-260nw-2049743471.webp',
        name: 'Product 1',
        description: 'The description of Product 1',
        price: 10,
    },
    '2': {
        id: '2',
        imgSrc: 'products/gender-neutral-baby-garment-organic-600w-1987778996.webp',
        name: 'Product 2',
        description: 'The description of Product 2',
        price: 20,
    },
    '3': {
        id: '3',
        imgSrc: 'products/stack-clothes-on-table-indoorhousehold-600w-695271853.webp',
        name: 'Product 3',
        description: 'The description of Product 3',
        price: 30,
    },
    '4': {
        id: '4',
        imgSrc: 'products/yellow-orange-flying-womens-autumn-600w-1798881250.webp',
        name: 'Product 4',
        description: 'The description of Product 4',
        price: 40,
    }
}

export default products;
