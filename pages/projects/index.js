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
        <title>Projects</title>
      </Head>

      <Image
        src={"/images/projects.png"}
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
      <Link href="/experience" passHref>
        <ScrollButtonContainer>
          <ScrollHeading>Experience</ScrollHeading>
          <Button>
            <Span1>
              <AiOutlineArrowDown style={arrowStyle} />
            </Span1>
          </Button>
        </ScrollButtonContainer>
      </Link>
      <Link href="/contact" passHref>
        <ScrollButtonContainer left>
          <ScrollHeading>Contact Me</ScrollHeading>
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
export default Projects;
