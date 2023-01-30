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
  return (
    <Container>
      <Image
        src={"/images/skillsBg.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      
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
    </Container>
  );
};
export default Skills;
