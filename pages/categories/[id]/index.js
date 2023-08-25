/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"

function index() {
    const router = useRouter();
    console.log("🚀 ~ file: index.js:5 ~ index ~ router:", {router})
  return (
    <div>
            <p> Esto es el Index de Detalle de una categoria: {router.query.id} </p>
    </div>
  )
}

export default index