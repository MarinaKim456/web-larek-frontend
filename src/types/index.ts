// карточка товара
export interface IItem{
    id: number;
    description: string;
    image:string;
    title: string
    category: string; 
    price: number;
    addToCart(itemId: number): void;
}

//корзина
export interface ICart{
    items: IItem[];
    total: number;
    deleteItem(itemId: number):void;
    makeOrder(): void;
}

//данные покупателя
export interface IUser{
    email: string;
    phone: string;
    address: string;
    addEmail(userEmail: string): void;
    addPhone(userPhone: string): void;
    addAddress(): void;
    checkValidation(data: Record<typeof IUserInfo, string>): boolean;
}

export type IUserInfo = Pick<IUser, 'email' | 'phone'>;

