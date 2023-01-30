import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import {
  Container,
  ContactMeContainer,
  HelperDiv,
  InformationContainer,
  ClickOpenContainer,
  PressEnterContainer,
  ScrollHeading,
  Button,
  Span1,
  ScrollButtonContainer,
} from "../../components/pageStyles/MainPage";

const Main = () => {
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
  return (
    <Container>
      <Image
        src={"/images/background-1.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
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
    </Container>
  );
};

export default Main;
