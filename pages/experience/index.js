import Image from "next/image";
import {
  Container,
  InformationContainer,
  ContentContainer,
} from "../../components/pageStyles/ProjectsContainers";
import ExperienceElements from "../../components/pageComponents/experience/ExperienceElements";
import { overlayStyle } from "../main";

const Experience = props => {
  const styles = {
    backgroundColor: "transparent",
  };
  return (
    <Container id={props.id}>
      <Image
        src={"/images/experience-background.png"}
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
          src={"/experienceInfo.svg"}
          height={100}
          width={500}
          alt="mainbgimg"
          style={styles}
          className="introImg"
        />
        <ContentContainer>
          <ExperienceElements />
        </ContentContainer>
      </InformationContainer>
    </Container>
  );
};
export default Experience;
