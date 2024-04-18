describe('Union type', () => {
    it('should support in typescript', () => {
        let sample: number | string | boolean = "Ringin";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);
    });
});