describe('Data array', () => {
    it("should same with javascript", function(){
        const names: string[] = ["eko", "budi", "joko"];
        const values: number[] = [1, 2, 3, 4, 5, 6];

        console.info(names)
        console.info(values)
    });

    //readonly tidak bisa mengubah array
    it("should support readonly array", function (){
        const hobbies : ReadonlyArray<string> =["membaca", "menulis"];
        console.info(hobbies)
        console.info(hobbies[0])
        console.info(hobbies[1])
        // hobbies[0] = "main game"
    });

    it("should support tupple", function () {
        const person: readonly[string, string, number] = ["Ringin", "Restu", 21]
        console.info(person)

        console.info(person[0])
        console.info(person[1])
        console.info(person[2])
    });
});