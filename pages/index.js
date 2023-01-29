import Image from "next/image";
import Socials from "../components/pageComponents/Socials/Socials";
import {
  Container,
  InformationContainer,
  ContactMeContainer,
  ClickOpenContainer,
  SocialContainer,
  PressEnterContainer,
  ScrollButtonContainer,
  EarthContainer,
  HelperDiv,
  // Earth,
  ScrollHeading,
  Button,
  Span1,
  Span2,
} from "../components/pageStyles/MainPage";
import { AiOutlineArrowDown } from "react-icons/ai";
// import Earth from "../components/Earth/Earth";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  const styles = {
    backgroundColor: "transparent",
  };
  const styles1 = {
    backgroundColor: "transparent",
    width: "85%",
  };
  const leftBorderStyle = {
    backgroundColor: "transparent",
    position: "absolute",
    left: "0",
    top: "0",
  };
  const rightBorderStyle = {
    backgroundColor: "transparent",
    position: "absolute",
    right: "0",
    bottom: "0",
  };
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
    <Container>
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* <Earth /> */}

      <Image 
      src={'/images/background-1.png'}
      alt="background"
      fill
      style={{
        objectFit:"cover",
        objectPosition:"center"
      }}
      />

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
      <InformationContainer>
        <Image
          src={"/infoMainPage.svg"}
          height={400}
          width={700}
          alt="mainbgimg"
          style={styles}
        />
        <ClickOpenContainer>
          <Image
            src={"/leftBorder.svg"}
            alt="leftBorder"
            height={50}
            width={50}
            style={leftBorderStyle}
          />
          {/* <Image
            src={"/click.svg"}
            alt="leftBorder"
            height={120}
            width={120}
            style={styles}
          /> */}
          <Image
            src={"/information.svg"}
            alt="leftBorder"
            height={400}
            width={400}
            style={styles1}
          />
          <Image
            src={"/rightBorder.svg"}
            alt="leftBorder"
            height={50}
            width={50}
            style={rightBorderStyle}
          />
        </ClickOpenContainer>
      </InformationContainer>
      <SocialContainer>
        <Socials />
      </SocialContainer>
      <PressEnterContainer>
        <ScrollHeading>Download CV</ScrollHeading>
        <Button>
          <Span1>
            <AiOutlineArrowDown style={arrowStyle} />
          </Span1>
        </Button>
      </PressEnterContainer>
      <Link href="/skills">
        <ScrollButtonContainer>
          <ScrollHeading>SCROLL</ScrollHeading>
          <Button>
            <Span1>
              <Span2></Span2>
            </Span1>
          </Button>
        </ScrollButtonContainer>
      </Link>
      <EarthContainer>
        {/* <GlowyEarth> */}
        <Image
          src={"/earth.svg"}
          height={1100}
          width={1100}
          alt="earth"
          style={styles}
        />
        {/* </GlowyEarth> */}
      </EarthContainer>
    </Container>
  );
};
export default Home;
