import Image from "next/image";
import Link from "next/link";
import Padme from "../public/padme.png";

const Pokemon = ({name})=> {
  return(
    <li>{name}</li>
  )
}

export default function Home({ pokemones }) {
  console.log("🚀 ~ file: index.js:5 ~ Home ~ pokemones:", pokemones)
  return (
    <div>
      <p> Hola mundo, esta es una aplicacion creada con Next.js</p>

      <Link href="/posts"> Ir a POSTS</Link>

      <div className="flex gap-1 ">
        {/* esta puede ser una forma de mostrar imagenes con el componente de <Image/> */}
        <Image
          className="rounded-md"
          src={"/renier.png"}
          width={400}
          height={400}
          alt="renier"
        />
        {/* esta puede ser otra forma de mostrar imagenes , importandola. */}
        <Image
          className="rounded-md"
          src={Padme}
          width={400}
          height={400}
          alt="padme"
        />
      </div>

      <p>Lista de pokemones</p>
      <div>
        <ul>
          {pokemones.map(poke=> <Pokemon name={poke.name} key={poke.id} />)}
        </ul>
      </div>
    </div>
  );
}

// esto me  permite generar la pagina de forma estatica cuando ejecutemos en comando de "npm run build", de forma autmatica genera un pagina de HTML, que sera la primera pagina que se le muestra al usuario la primera vez que entra a esta pagina . la segunda vez si cargara el archivo index.js
// al ejecutar el comando de npm run build , esto va a indicar al finalizar que utilizo SSG (Static Site Generation)
export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  return {
    props: { pokemones: data.results },
  };
};
