describe('Any', () => {
    // any tidak akan dilakukan pengecekkan
    it('should support in typescript', () => {

        const person:any = {
            id:1,
            name: "Ringin Restu Pati",
            age: 23
        };

        person.age = 24;
        person.address = "indonesia";

        console.info(person);

    });
})
