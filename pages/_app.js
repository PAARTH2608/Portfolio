import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { Suspense, useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdEmojiEmotions } from "react-icons/md";
import Earth from "../components/Earth/Earth";
import Socials from "../components/pageComponents/Socials/Socials";
import PageLoader from "../components/PageLoader";
import { motion } from "framer-motion";
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
  VisitCountContainer,
} from "../components/pageStyles/MainPage";
import Links from "../components/pageComponents/Global/Links";
import "../styles/globals.css";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  const [visible, setIsVisible] = useState(true);
  const [visitCount, setVisitCount] = useState(0);
  console.log(visitCount);

  const [showModal, setShowModal] = useState(false);

  const handleBuyCoffeeClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 2470;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        visible &&
          setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [visible]);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch("/api/visit_count");
        const data = await response.json();
        setVisitCount(data.count);
        await fetch("/api/visit_count", {
          method: "POST",
        });
      } catch (error) {
        console.error("Failed to fetch visit count:", error);
      }
    };

    fetchVisitCount();
  }, []);

  const arrowStyle = {
    position: "absolute",
    display: "block",
    top: "29%",
    left: "35%",
    width: "18px",
    height: "18px",
    margin: "-4px 0 0 -4px",
    background: "white",
    borderRadius: "50%",
    WebkitAnimation: "ani-mouse 2.5s linear infinite",
    MozAnimation: "ani-mouse 2.5s linear infinite",
    animation: "ani-mouse 2.5s linear infinite",
    color: "#CEB7FF",
    backgroundColor: "transparent",

    "@media only screen and (maxWidth: 1920px)": {
      width: "14px",
      height: "14px",
    },
    "@media only screen and (maxWidth: 1520px)": {
      width: "10px",
      height: "10px",
      margin: "-2px 0 0 -2px",
      left: "25%",
    },
    "@media only screen and (maxWidth: 1000px)": {
      width: "10px",
      height: "10px",
      margin: "-1px 0 0 -1px",
    },
  };

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <HelperDiv>
          <ContactMeContainer>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Text onClick={handleBuyCoffeeClick}>Buy Me A Coffee</Text>
            </motion.div>
          </ContactMeContainer>
        </HelperDiv>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
            onClick={handleCloseModal}
          >
            <Image
              src="/qrcode.png"
              alt="QR Code"
              style={{ maxWidth: "80%", maxHeight: "80%", borderRadius: "8px" }}
              width={500}
              height={500}
            />
          </motion.div>
        )}
        <SocialContainer>
          <Socials />
        </SocialContainer>
        {visible && <EarthContainer><Earth /></EarthContainer>}
        <Link
          href="https://drive.google.com/file/d/1LLG4iAQpc-Z0ZIv1ub8tI-HMopPZq8m9/view?usp=sharing"
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
        <VisitCountContainer>
          <MdEmojiEmotions size={"30px"} style={{
            color: "#ceb7ff",
            background: "transparent"
          }} />: {visitCount}
        </VisitCountContainer>
        <Component {...pageProps} />
        <Analytics mode={"production"} />
      </Suspense>
    </>
  );
}
