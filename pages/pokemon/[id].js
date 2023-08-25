import { useRouter } from "next/router"

function PokemonDetail() {
    const router = useRouter();
  return (
    <div>PokemonDetail {router.query.id}</div>
  )
}

export default PokemonDetail