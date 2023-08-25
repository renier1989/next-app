/* eslint-disable react-hooks/rules-of-hooks */
import { useIsMounted } from "@/hooks/useIsMounted";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

function postDetail() {
    const isMounted = useIsMounted();
    const router = useRouter();

    if(!isMounted) {
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