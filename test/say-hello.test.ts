import {sayHello} from "../src/say-hello";
describe('sayHello', function() {
    it('should return hello ringin', function(){
        expect(sayHello('ringin')).toBe('hello ringin');
    });
});
