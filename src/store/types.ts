export interface IProductAPI {
    id: string;
    imgSrc: string;
    name: string;
    description: string;
    price: number;
}

export interface IProductsModel {
    products: Record<string, IProductAPI>
}

export interface IRootState {
    products: IProductsModel
}