const { render, screen } = require("@testing-library/react");
import Index, { getStaticProps } from "../pages/index";
describe("Index", () => {
  // esto es como para definir el nombre del archivo al que le estamos haciendo el test
  describe("Component", () => {
    // igualmente esto metodo de describe se puede anidar y definirle nombre como para dar un titulo
    it("Se Renderiza", () => {
      render(
        <Index
          pokemones={[{ name: "Renier Vargas", url: "ruta/de/ejemplos/1" }]}
        />
      ); // aqui hago una simularion que un pokemon con la
      const paragraph = screen.getByTestId("titulo");
      expect(paragraph).toBeInTheDocument();

      const nombre = screen.getByText("Renier Vargas");
      expect(nombre).toBeInTheDocument();

      const url = nombre.getAttribute("href");
      expect(url).toEqual("/pokemon/1");
    });
  });

  describe("Testing getStaticProps", () => {
    // los test solo que puede ejecutar cuando esto estan dentro del "it"
    // como estamos probando respuesta a una api esta igualmente se le debe indicar que es una funcion async
    it("Retorna los pokemones", async () => {
      // debemos declarar el global.fetch para poder usar y simular el compartamiento de fetch
      // esto crea un mock y asi simular funciones , en este caso vamos a simular un fetch y tambine le vamos a refinier su comportameinto
      global.fetch = jest.fn().mockImplementation((url) => {
        console.log(url);
        expect(url).toEqual('https://pokeapi.co/api/v2/pokemon?limit=151'); // aqui estamos validando exactamente que la url que se le esta pasando al Fetch es la que realmente debe ser
        // esto primero espera una url , esto es el equibalente a los que esta en el fetch la ruta de la api
        return new Promise((resolve) => {
          // esto es la promesa que se va a resolver, es es el equibalente a la respuesta del reponse
          resolve({
            // esto es el equibalente a lo que esta resolviendo y lo que se carga en data
            json: () =>
              Promise.resolve({
                // aqui se resolvio la respuesta del data,  esto lo que espera al final es un data.results
                results: "esta es la lista de pokemones", // aqui no importa validar una estructura de la respuesta real de la api , simplemte se esta validando el comportamiento y que es lo que espera que responda. es decir llegar al results
              }),
          });
        });
      });

      const { props } = await getStaticProps(); // aqui accedo a la function que trae los pokemones especificamente a las props que retorna la funcion
      expect(props.pokemones).toBe("esta es la lista de pokemones"); // aqui compra con la respueta que dio la funcion de getStaticProps, 
    });
  });
});
