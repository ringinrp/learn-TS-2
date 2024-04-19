import { Seller } from "../src/seller";

describe('Interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: "Toko abc",
            nib: "12312",
            npwp:"3273271"
        }
        console.info(seller);
    });

    it('should support function interface', () => {
        interface AddFunction{
            (value1: number, value2: number):number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(2,2)).toBe(4);
    });
});
