const { render, screen } = require("@testing-library/react");
import Index from "../pages/index";
describe("Index", () => {
  // esto es como para definir el nombre del archivo al que le estamos haciendo el test
  describe("Component", () => {
    // igualmente esto metodo de describe se puede anidar y definirle nombre como para dar un titulo
    it("Se Renderiza", () => {
      

      // // ESTA ES UNA FORMA DE HACER LAS VERIFICACIONES
    //   // aqui no le pasamos para es como para verificar de que se esta renderizando
    //   render(
    //     // con esto podemos verificar que se esta renderizando el componente principal, y este como tiene una propiedad de pokemons este espero algo similar, por lo que se le puede poner un areglo vacio para simular eso
    //     <Index pokemones={[]} />
    //   );
    //   // esta es una forma de validar si al  renderizar el componente, a traves de un id "titulo" definido como "data.testid='titulo'" se puede captura ese elemento y verificar si se renderiza
    //   const paragraph = screen.getByTestId("titulo");
    //   expect(paragraph).toBeInTheDocument();

    // // ESTA ES OTRA MANERA UN POCO MAS ESPECIFICA DE VALIDAR A TRAVES DE LA PROPIEDAD getByTestId QUE ES PARTE DE render() 
    // con esto puede saber si especificamente en ese componente se renderizo ese elemento. 
    const {getByTestId} =render(
        
        <Index pokemones={[]} />
      );
      // esta es una forma de validar si al  renderizar el componente, a traves de un id "titulo" definido como "data.testid='titulo'" se puede captura ese elemento y verificar si se renderiza
      const paragraph = getByTestId("titulo");
    //   const paragraph = screen.getByText("Lista de pokemones"); // esto es una forma tambien se validar texto de forma mas especifica si se renderizo ese texto talcual como esta escrito en el archivo index
      expect(paragraph).toBeInTheDocument();
    });
  });
});
