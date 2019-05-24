import { IProduct } from '../interfaces/iproduct';

export class Product implements IProduct {
    public name: string;
    public description: string;
    public price: number;
    public isAvailable: boolean;
    public producer: Country;
    public ingredients: Array<string> = [];
}
