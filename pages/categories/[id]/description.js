/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"

function description() {
    const router = useRouter();
    console.log("🚀 ~ file: description.js:5 ~ description ~ router:", {router})
    
  return (
    <div>
        <p>esto es la descripcion de la categoria con el id : {router.query.id}</p>
    </div>
  )
}

export default description