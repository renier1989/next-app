/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

function postDetail() {
    const router = useRouter();
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        if(router.isReady){
            setLoaded(true);
        }
    },[router.isReady]); // esto  es simplemente para verificar si ya se cargo la ruta.

    if(!loaded){
        return null;
    }
    console.log({router}, router.query.id);
  return (
    <div>
        <p>Esto es el detalle de un post</p>
    </div>
  )
}

export default postDetail