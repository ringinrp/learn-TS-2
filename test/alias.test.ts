import { Category, Product } from "../src/alias";

describe('Alias', () => {
    it('should support in typescript', () => {
        
        const category: Category = {
            id : "1",
            name: "handphone"
        }

        const product: Product = {
            id: "1 ",
            name: "Samsung S20",
            price: 200000,
            category: category
        }

        console.info(category);
        console.info(product);
    });
});