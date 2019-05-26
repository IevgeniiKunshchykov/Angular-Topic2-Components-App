export interface IProduct {
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    producer: Country;
    ingredients: Array<string>;
}
