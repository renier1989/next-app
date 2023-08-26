import { render, screen, waitFor } from "@testing-library/react";
import Poke from "../pages/poke";
describe("Poke", () => {
  it("Render de Pokemones con Hooks", async() => {
    const mockResults = [
      { name: "Un Pokemons", url: "http://pagina/delos/pokemons/1" },
    ]; // esto es para simular una respuesta de la api
    // hago la simulacion del fetch
    global.fetch = jest.fn().mockImplementation((url) => {
      console.log(url);
      return new Promise((resolve) => {
        resolve({
          json: () =>
            Promise.resolve({
              results: mockResults,
            }),
        });
      });
    });
    render(<Poke />);

    const loading = screen.getByText("Cargando...");
    expect(loading).toBeInTheDocument();
    // esto es para poder esperar a que se carque todo y comprobar si se renderizo bien el componente
    // esto se hace porque como estamos llamando a los pokemons con un useEffect, primero cargo un componente de cargando y luego que recibir la resputa de los pokemones se renderiza otro componente que tendra ese texto "Lista de pokemones" 
    await waitFor(()=> screen.getByText('Lista de pokemones')) 
    const element = screen.getByTestId(1); // aqui obtenemos un elementos en particular que sera el componente que contendra la info del pokemon
    const anchor = element.children[0];
    expect(anchor).toHaveAttribute('href', '/pokemon/1') // asi validamos que el elemento tengo en su anchor o link tengo lo esperado
    expect(anchor).toHaveTextContent('Un Pokemon');  // igualmente validamos que tengo un texto esperado
  });
});
