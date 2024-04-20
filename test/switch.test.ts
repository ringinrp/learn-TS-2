describe('Switch statement', () => {
    it('should support in typescript', () => {
        function sayHello(name: string): string {
            switch (name){
                case "Ringin" :
                    return "Hi, Ringin";
                case "Restu":
                    return "Hi, Restu";
                default :
                    return "Tidak ada !!"
            }

            console.info(sayHello("Ringin"));
            console.info(sayHello("Restu"));
        }
    });
})
