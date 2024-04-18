describe('Object', () => {
    it('should support in typescript', () => {
        const person : {id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "Ringin"
        }

        console.info(person);

        person.id="2";
        person.name="Restu";

        console.info(person);
    });
})
