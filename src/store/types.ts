export interface IProductAPI {
    id: string;
    imgSrc: string;
    name: string;
    description: string;
    price: number;
}

export interface IProductsModel {
    products: Record<string, IProductAPI>;
    lastId: string;
    productTemplate: IProductAPI;
}

export interface ISettingsModel {
    shouldShowModal: boolean;
}

export interface IRootState {
    products: IProductsModel;
    settings: ISettingsModel;
}