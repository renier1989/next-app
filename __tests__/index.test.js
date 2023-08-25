const suma =() => 2+2;
describe('Index', () => { // esto es como para definir el nombre del archivo al que le estamos haciendo el test
    describe('Component', () => { // igualmente esto metodo de describe se puede anidar y definirle nombre como para dar un titulo
        it('Se Renderiza', ()=>{}) // aqui no le pasamos para es como para verificar de que se esta renderizando
    });
    describe('Una suma',()=>{
        it('suma 2 + 2', () => {
            // expect(2+2).toBe(5)
            expect(suma()).toBe(4)
        });
    })
});
