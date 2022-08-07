import {IProductAPI} from "../store/types";

const products: Record<string, IProductAPI> = {
    '1': {
        id: '1',
        imgSrc: 'products/fabric-gold-color-cloth-flowing-260nw-2049743471.webp',
        name: 'C. Product First 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 10,
    },
    '2': {
        id: '2',
        imgSrc: 'products/gender-neutral-baby-garment-organic-600w-1987778996.webp',
        name: 'D. Product Second 2',
        description: 'Pellentesque augue quam, malesuada viverra dictum sed, vehicula eu tortor. ',
        price: 20,
    },
    '3': {
        id: '3',
        imgSrc: 'products/stack-clothes-on-table-indoorhousehold-600w-695271853.webp',
        name: 'A.Product Third 3',
        description: 'Maecenas lacus risus, pretium eu neque eget, semper dictum est',
        price: 30,
    },
    '4': {
        id: '4',
        imgSrc: 'products/yellow-orange-flying-womens-autumn-600w-1798881250.webp',
        name: 'B. Product Forth 4',
        description: 'Proin ex elit, faucibus vitae enim vitae, semper gravida justo',
        price: 40,
    }
}

export default products;
