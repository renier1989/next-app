import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useIsMounted = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]); // esto  es simplemente para verificar si ya se cargo la ruta.

  return loaded;
};
