import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { SiBuymeacoffee } from "react-icons/si";
import Earth from "../components/Earth/Earth";
import Socials from "../components/pageComponents/Socials/Socials";
import PageLoader from "../components/PageLoader";
import {
  Button,
  ContactMeContainer,
  EarthContainer,
  HelperDiv,
  LinksContainer,
  PressEnterContainer,
  ScrollHeading,
  SocialContainer,
  Span1,
  Text,
} from "../components/pageStyles/MainPage";
import Links from "../components/pageComponents/Global/Links";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [visible, setIsVisible] = useState(true);

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 2470;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        visible && // to limit setting state only the first time
          setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [visible]);

  const arrowStyle = {
    position: "absolute",
    display: "block",
    top: "29%",
    left: "35%",
    width: "18px",
    height: "18px",
    margin: "-4px 0 0 -4px",
    background: "white",
    "border-radius": "50%",
    "-webkit-animation": "ani-mouse 2.5s linear infinite",
    "-moz-animation": "ani-mouse 2.5s linear infinite",
    animation: "ani-mouse 2.5s linear infinite",
    color: "#CEB7FF",
    backgroundColor: "transparent",
  };

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <HelperDiv>
          <ContactMeContainer>
            <Link href={"/contact"} style={{ background: "transparent" }}>
              <Text>
                Buy Me A Coffee
                <SiBuymeacoffee style={{ background: "transparent" }} />
              </Text>
            </Link>
          </ContactMeContainer>
        </HelperDiv>
        <SocialContainer>
          <Socials />
        </SocialContainer>
        <EarthContainer>{visible && <Earth />}</EarthContainer>
        <Link
          href="https://drive.google.com/file/d/17rZEn9e_wD7J-baKTZ15yadNGKmwbdF8/view?usp=sharing"
          passHref
          target="_blank"
        >
          <PressEnterContainer>
            <ScrollHeading>Resume</ScrollHeading>
            <Button>
              <Span1>
                <AiOutlineArrowDown style={arrowStyle} />
              </Span1>
            </Button>
          </PressEnterContainer>
        </Link>
        <LinksContainer>
          <Links />
        </LinksContainer>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
