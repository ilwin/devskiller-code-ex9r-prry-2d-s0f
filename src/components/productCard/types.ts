export interface IProductCard {
    id?: string;
    className?: 'product-preview' | 'product-edit';
    imgSrc: string;
    name: string;
    description: string;
    price: number;
    button: React.ReactNode;
    isSelected?: boolean;
    onClick?: (id: string) => void;
}
