const { render, screen } = require("@testing-library/react");
import Index from "../pages/index";
describe("Index", () => {
  // esto es como para definir el nombre del archivo al que le estamos haciendo el test
  describe("Component", () => {
    // igualmente esto metodo de describe se puede anidar y definirle nombre como para dar un titulo
    it("Se Renderiza", () => {
      render(<Index pokemones={[{name:'Renier Vargas', url : 'ruta/de/ejemplos/1'}]} />); // aqui hago una simularion que un pokemon con la estructura real de como esta conformado un obj que recive este componente 
      //   const paragraph = getByTestId("titulo"); // esto eso el metodo getByTestId pero de render, no usa screen
    //   const paragraph = screen.getByText("Lista de pokemones"); // esto es una forma tambien se validar texto de forma mas especifica si se renderizo ese texto talcual como esta escrito en el archivo index
      const paragraph = screen.getByTestId("titulo"); // esto es una forma tambien se validar texto de forma mas especifica si se renderizo ese texto talcual como esta escrito en el archivo index
      expect(paragraph).toBeInTheDocument();

      const nombre = screen.getByText('Renier Vargas'); // aqui estoy haciendo la comprobacion de si al renderizar Index este tiene un pokemon con el nombre especificaco
    //   console.log(nombre.getAttribute('href'));  // esto es para ver directamente a un atributo y sus parametreos para saber es que el valor que recibe y  asi validar si es que realemente esta recibiendo eso
      expect(nombre).toBeInTheDocument();

      const url = nombre.getAttribute('href');  // esto lo esta tomando del compoennte Link por que es lo que se esta renderiznado y encontrando con ese texto en la linea 14 , por eso puedo validar sobre ese componente si hay una propiedad href y tiene una estructura esperada
      expect(url).toEqual('/pokemon/1');

    });
  });
});
