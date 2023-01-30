import Image from "next/image";
import {
  Container,
  InformationContainer,
  ContentContainer,
} from "../../components/pageStyles/ProjectsContainers";
import {
  HelperDiv,
  ContactMeContainer,
  ScrollButtonContainer,
  ScrollHeading,
  Button,
  Span1,
} from "../../components/pageStyles/MainPage";
import ExperienceElements from "../../components/pageComponents/experience/ExperienceElements";
import { AiOutlineArrowDown } from "react-icons/ai";
import Head from "next/head";
import Link from "next/link";

const Experience = () => {
  const styles = {
    backgroundColor: "transparent",
  };
  return (
    <Container>
      <Image
        src={"/images/experience-background.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <InformationContainer>
        <Image
          src={"/experienceInfo.svg"}
          height={100}
          width={500}
          alt="mainbgimg"
          style={styles}
        />
        <ContentContainer>
          <ExperienceElements />
        </ContentContainer>
      </InformationContainer>
    </Container>
  );
};
export default Experience;
