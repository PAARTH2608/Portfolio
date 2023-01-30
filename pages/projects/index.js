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
import ProjectElements from "../../components/pageComponents/projects/ProjectElement";
import { AiOutlineArrowDown } from "react-icons/ai";
import Head from "next/head";
import Link from "next/link";

const Projects = () => {
  const styles = {
    backgroundColor: "transparent",
  };
  return (
    <Container>
      <Image
        src={"/images/projects.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      
      <InformationContainer>
        <Image
          src={"/projectsInfo.svg"}
          height={100}
          width={500}
          alt="mainbgimg"
          style={styles}
        />
        <ContentContainer>
          <ProjectElements />
        </ContentContainer>
      </InformationContainer>

    </Container>
  );
};
export default Projects;
