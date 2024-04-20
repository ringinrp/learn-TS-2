describe('Function', () => {
  it('should support in typescript', () => {
    function sayHello(name: string): string {
        return `Hello ${name}`;
    }

    expect(sayHello("Ringin")).toBe("Hello Ringin");

    function printHello(name: string): void {
    console.info(`Hello ${name}`);
    }
    printHello("Ringin");
  });

  it('should support default value', () => {
    function sayHello(name: string = "Guest"): string {
        return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Ringin")).toBe("Hello Ringin");
  });

  it('should support rest parameter', () => {
    function sum(...values: number[]): number {
        let total = 0;
        for(const value of values){
            total += value;
        }

        return total;
    }
    expect(sum(1,2,3,4,5)).toBe(15);
  });

  it('should support optional parameter', () => {
    function sayHello(firstName: string, lastName?: string): string {
        if(lastName){
            return `Hello ${firstName} ${lastName}`
        }else{
            return `Hello ${firstName}`
        }
    }
    expect(sayHello("Ringin")).toBe("Hello Ringin");
    expect(sayHello("Ringin", "Restu")).toBe("Hello Ringin Restu");
  });

    it('shoul support function overloading', () => {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any{
            if (typeof value === "string") {
                return value.toUpperCase();
            } else {
                return value * 10;
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe("Ringin")).toBe("RINGIN");
    });

    it('should function as parameter', () => {
        
        function sayHello(name: string, filter: (name: string)=>string): string{
            return `Hello ${filter(name)}`
        }

        function toUpper(name: string): string{
            return name.toUpperCase();
        }

        expect(sayHello("Ringin", toUpper)).toBe("Hello RINGIN");

        expect(sayHello("Ringin", function(name: string): string{
            return name.toUpperCase();
        })).toBe("Hello RINGIN");

        expect(sayHello("Ringin", (name: string): string => name.toUpperCase())).toBe("Hello RINGIN");
    });
});
