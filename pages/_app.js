// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import Image from "next/image";
import { Suspense } from "react";
import Socials from "../components/pageComponents/Socials/Socials";
import PageLoader from "../components/PageLoader";
import {
  EarthContainer,
  SocialContainer,
} from "../components/pageStyles/MainPage";
import Transition from "../framer/Transition";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const styles = {
    backgroundColor: "transparent",
  };

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Transition>
          <SocialContainer>
            <Socials />
          </SocialContainer>
          <EarthContainer>
            <Image
              src={"/earth.svg"}
              height={1100}
              width={1100}
              alt="earth"
              style={styles}
            />
          </EarthContainer>
          <Component {...pageProps} />
        </Transition>{" "}
      </Suspense>
    </>
  );
}
