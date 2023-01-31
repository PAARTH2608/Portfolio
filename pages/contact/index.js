import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import ContactElement from "../../components/pageComponents/Contact/ContactElement";
import {
  Container,
  InformationContainer,
  ContactMeContainer,
  HelperDiv,
  ContentContainer,
  GoBack,
} from "../../components/pageStyles/Contact";
import {
  Button,
  ScrollButtonContainer,
  ScrollHeading,
  Span1,
} from "../../components/pageStyles/MainPage";

const Contact = () => {
  const styles = {
    backgroundColor: "transparent",
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
      <Image
        src={"/images/contact.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <HelperDiv>
        <ContactMeContainer>
          <GoBack>Go Back</GoBack>
        </ContactMeContainer>
      </HelperDiv>
      <InformationContainer>
        <Image
          src={"/contactInfo.svg"}
          height={100}
          width={500}
          alt="mainbgimg"
          style={styles}
        />
        <ContentContainer>
          <ContactElement />
        </ContentContainer>
      </InformationContainer>
      {/* <Link href={"/"}>
        <ScrollButtonContainer left>
          <ScrollHeading>Click</ScrollHeading>
          <Button>
            <Span1>
              <AiOutlineArrowDown style={arrowStyle} />
            </Span1>
          </Button>
        </ScrollButtonContainer>
      </Link> */}
    </Container>
  );
};
export default Contact;
