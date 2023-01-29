import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import SkillElements from "../../components/pageComponents/Skills/SkillElements";
import {
  Container,
  InformationContainer,
  ContactMeContainer,
  ScrollButtonContainer,
  HelperDiv,
  ScrollHeading,
  Button,
  Span1,
  Heading,
  SkillsContainer,
} from "../../components/pageStyles/SkillsPage";

const Skills = () => {
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
        <title>Skills</title>
      </Head>

      <Image
        src={"/images/skillsBg.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
          "&:before": {
            content: "",
            position: "absolute",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
            opacity: 0.5,
          },
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
          src={"/skillsInfo.svg"}
          height={100}
          width={500}
          alt="mainbgimg"
          style={styles}
        />
        <Heading> HERE ARE THE LIST OF MY SKILLS</Heading>
        <SkillsContainer>
          <SkillElements />
        </SkillsContainer>
      </InformationContainer>
      <Link href="/experience">
        <ScrollButtonContainer left>
          <ScrollHeading>Experience</ScrollHeading>
          <Button>
            <Span1>
              <AiOutlineArrowDown style={arrowStyle} />
            </Span1>
          </Button>
        </ScrollButtonContainer>
      </Link>
      <Link href="/" passHref>
        <ScrollButtonContainer>
          <ScrollHeading>Main</ScrollHeading>
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
export default Skills;
