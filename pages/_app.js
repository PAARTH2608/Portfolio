// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import { Suspense } from "react";
import PageLoader from "../components/PageLoader";
import Transition from "../framer/Transition";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3000);
  // }, []);

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Transition>
          <Component {...pageProps} />
        </Transition>{" "}
      </Suspense>
    </>
  );
}
