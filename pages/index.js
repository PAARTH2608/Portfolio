import Image from "next/image";
import {
  Container,
  InformationContainer,
  ContactMeContainer,
  ClickOpenContainer,
  PressEnterContainer,
  ScrollButtonContainer,
  HelperDiv,
  ScrollHeading,
  Button,
  Span1,
} from "../components/pageStyles/MainPage";
import { AiOutlineArrowDown } from "react-icons/ai";
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
        src={"/images/background-1.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
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
      <Link href="https://drive.google.com/file/d/1BhWCzBY6UznMOXy5bOGmj9KxbFXNMbnw/view?usp=sharing" passHref target="_blank" >
        <PressEnterContainer>
          <ScrollHeading>Resume</ScrollHeading>
          <Button>
            <Span1>
              <AiOutlineArrowDown style={arrowStyle} />
            </Span1>
          </Button>
        </PressEnterContainer>
      </Link>
      <Link href="/skills" passHref>
        <ScrollButtonContainer left>
          <ScrollHeading>Skills</ScrollHeading>
          <Button>
            <Span1>
              <AiOutlineArrowDown style={arrowStyle} />
            </Span1>
          </Button>
        </ScrollButtonContainer>
      </Link>
    </Container>
  );
};
export default Home;
