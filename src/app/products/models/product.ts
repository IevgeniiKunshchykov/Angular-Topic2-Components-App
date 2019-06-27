import { IProduct } from '../interfaces/iproduct';
import { Country } from './country';

export class Product implements IProduct {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public isAvailable: boolean;
    public producer: Country;
    public ingredients: Array<string> = [];
    public comments: Array<string> = [];
}
