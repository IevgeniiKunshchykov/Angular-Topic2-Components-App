import { IOrderItem } from './iorderitem';
import { IUser } from 'src/app/core/models/iuser';

export interface IOrder {
    orderItems: IOrderItem[];
    user: IUser;
    id: number;
}
