export interface IProduct {
    id: string;
    imgSrc: string;
    name: string;
    description: string;
    price: number;
}

export interface IMyStore {

}

export interface IProductsList {
    products: Array<IProduct>;
    selectedId?: string;
    onClick(id: string): void;
    deleteProduct(id: string): void;
}
