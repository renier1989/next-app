import Image from "next/image";
import Link from "next/link";

function PokemonDetail({data}) {
  return (
    <div>
        <p>{data.name} Pokemon # {data.id}</p>
        <Image src={data.sprites.front_default} alt={data.name} width={300} height={300}/>
        <Link href={'/'}> Volver al inicio </Link>
    </div>
  )
}

// esta funcion se usa para el SSR (Server Side Rendering)
export const getServerSideProps = async ({params}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const data = await response.json();

    return {props : {data}}
}

export default PokemonDetail