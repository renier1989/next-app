import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function PokemonDetail({ data }) {
//   const router = useRouter();

//   // esto se usa cuando el getStaticPaths tiene el fallback definido en true
//   if (router.isFallback) {
//     return <p>Cargando....</p>;
//   }

  return (
    <div className="flex flex-col items-center justify-center">
      <p>
        {data.name} Pokemon # {data.id}
      </p>
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width={300}
        height={300}
      />
      <Link href={"/"}> Volver al inicio </Link>
    </div>
  );
}
export default PokemonDetail;

// esta funcion es para renderizar rutas estaticas dinamicas
export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();

  return { props: { data } };
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  return {
    paths,
    fallback: 'blocking',
    // con el fallback : false, solo va a generar el HTML unicamente para las rutas definidas en paths
    // con el fallback : true, se va a intentar renderizar el componente que no esten dentro de paths, esto lo hare en modo lazy. por lo que hay que validar con el metodo de isFallback de useRouter de next (se debe generar un componente previo que como un Cargando)
    // con el fallback  : 'blocking' , este va a esperar hasta que toda la data esta cargada para luego si mostrar el contenido al usaurio
  };
};

// // esta funcion se usa para el SSR (Server Side Rendering)
// export const getServerSideProps = async ({params}) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
//     const data = await response.json();

//     return {props : {data}}
// }

// export default PokemonDetail
