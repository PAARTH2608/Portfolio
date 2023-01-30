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
    </Container>
  );
};
export default Contact;
