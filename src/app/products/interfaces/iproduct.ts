import { Country } from '../models/country';

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    producer: Country;
    ingredients: Array<string>;
    comments: Array<string>;
}
