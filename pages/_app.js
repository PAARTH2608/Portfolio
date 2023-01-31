// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Earth from "../components/Earth/Earth";
import Socials from "../components/pageComponents/Socials/Socials";
import PageLoader from "../components/PageLoader";
import {
  Button,
  ContactMeContainer,
  EarthContainer,
  HelperDiv,
  PressEnterContainer,
  ScrollButtonContainer,
  ScrollHeading,
  SocialContainer,
  Span1,
} from "../components/pageStyles/MainPage";
import EarthTransition from "../framer/EarthTransition";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [visible, setIsVisible] = useState(true);
  const styles = {
    backgroundColor: "transparent",
  };

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 2240;
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
            <Image
              src={"/contact.svg"}
              alt="contact"
              width={100}
              height={100}
              style={styles}
            />
          </ContactMeContainer>
        </HelperDiv>
        <SocialContainer>
          <Socials />
        </SocialContainer>
        {/* <EarthTransition> */}
        <EarthContainer>{visible && <Earth />}</EarthContainer>
        {/* </EarthTransition> */}
        <Link
          href="https://drive.google.com/file/d/1BhWCzBY6UznMOXy5bOGmj9KxbFXNMbnw/view?usp=sharing"
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
        <Link href={"/"}>
        <ScrollButtonContainer left>
          <ScrollHeading>Click</ScrollHeading>
          <Button>
            <Span1>
              <AiOutlineArrowDown style={arrowStyle} />
            </Span1>
          </Button>
        </ScrollButtonContainer>
      </Link>

        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
