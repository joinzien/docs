import React from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home() {
   React.useEffect(() => {
      window.location.href = useBaseUrl('/intro');
   }, []);

   return null
}
