import Image from "next/image";
import Link from "next/link";
import ContactElement from "../../components/pageComponents/Contact/ContactElement";
import {
  Container,
  InformationContainer,
  ContentContainer,
} from "../../components/pageStyles/Contact";
import { overlayStyle } from "../main";

const Contact = props => {
  const styles = {
    backgroundColor: "transparent",
  };
  return (
    <Container id={props.id}>
      <Image
        src={"/images/contact.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div style={overlayStyle}></div>
      <InformationContainer>
        <Image
          src={"/contactInfo.svg"}
          height={100}
          width={500}
          alt="mainbgimg"
          style={styles}
          className="introImg"
        />
        <ContentContainer>
          <ContactElement />
        </ContentContainer>
      </InformationContainer>
    </Container>
  );
};
export default Contact;
