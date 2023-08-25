
function PokemonDetail({data}) {
    console.log(data)
  return (
    <div>PokemonDetail </div>
  )
}

// esta funcion se usa para el SSR (Server Side Rendering)
export const getServerSideProps = async ({params}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const data = await response.json();

    return {props : {data}}
}

export default PokemonDetail