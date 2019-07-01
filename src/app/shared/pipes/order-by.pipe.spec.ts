
import { OrderByPipe } from './order-by.pipe';

function getObjectsArray(): any[] {
    return [ {
        name: 'B',
        age: 3
    }, {
        name: 'C',
        age: 1
    }, {
        name: 'A',
        age: 2
    }];
}

describe('OrderByPipe Tests', () => {

    const pipe = new OrderByPipe();

    it('Asc order array of objects by "name" property', () => {
        const items = getObjectsArray();
        const orderedItems = pipe.transform([...items], 'name', true);

        expect(orderedItems[0]).toBe(items[2]);
        expect(orderedItems[1]).toBe(items[0]);
        expect(orderedItems[2]).toBe(items[1]);
    });

    it('Desc order array of objects by "age" property', () => {
        const items = getObjectsArray();
        const orderedItems = pipe.transform([...items], 'age', false);

        expect(orderedItems[0]).toBe(items[0]);
        expect(orderedItems[1]).toBe(items[2]);
        expect(orderedItems[2]).toBe(items[1]);
    });
});
