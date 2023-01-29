import Head from "next/head";
import Image from "next/image";
import ContactElement from "../../components/pageComponents/Contact/ContactElement";
import Socials from "../../components/pageComponents/Socials/Socials";
import {
  Container,
  InformationContainer,
  ContactMeContainer,
  SocialContainer,
  EarthContainer,
  HelperDiv,
  Heading,
  ContentContainer,
  GoBack,
} from "../../components/pageStyles/Contact";

const Contact = () => {
  const styles = {
    backgroundColor: "transparent",
  };
  return (
    <Container>
      <Head>
        <title>Contact Me</title>
      </Head>
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
      <SocialContainer>
        <Socials />
      </SocialContainer>
    </Container>
  );
};
export default Contact;
