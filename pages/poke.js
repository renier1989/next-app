import Image from "next/image";
import Link from "next/link";
import Padme from "../public/padme.png";
import { useEffect, useState } from "react";

const Pokemon = ({pokemon})=> {
  const id = pokemon.url.split('/').filter(x=>x).pop();
    // console.log("🚀 ~ file: index.js:7 ~ Pokemon ~ id:", id)
    return(
    <li className=" bg-slate-200 p-2 rounded-md shadow-md cursor-pointer">
      <Link href={`/pokemon/${id}`}>{pokemon.name}</Link>
      </li>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [pokemones, setPokemones] = useState([]);

  useEffect(()=>{
    const getPokemones = async () =>{
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();
      setPokemones(data.results);
      setLoading(false);
    }
    getPokemones();
  },[]); 

  if(loading) {
    return(
      <p>Cargando...</p>
    );
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <p> Hola mundo, esta es una aplicacion creada con Next.js</p>

      <Link href="/posts"> Ir a POSTS</Link>

      <div className="flex gap-1 justify-center mb-10">
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

      <div className=" flex flex-col items-center justify-center  ">
      <p data-testid="titulo" className="flex items-center justify-center mx-auto text-2xl font-semibold text-slate-500">Lista de pokemones</p>
        <ul className="grid grid-cols-8 gap-4 my-20">
          {pokemones.map(poke=> <Pokemon pokemon={poke} key={poke.name} />)}
        </ul>
      </div>
    </div>
  );
}

