describe('Loop', () => {
    it('should support in typescript', () => {
        
        const names : string[] = ["Ringin", "Restu", "Pati"];

        for(let i = 0; i < names.length; i++){
            console.info(names[i]);
        }

        for(const name of names) {
            console.info(name);
        }

        for (const index in names){
            console.info(names[index]);
        }
    });

    it('should support while loop', () => {
        
        let counter: number = 0;

        while(counter < 10){
            console.info(counter);
            counter++;
        }
    });
})
