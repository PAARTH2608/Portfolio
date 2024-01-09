import Image from "next/image";
import {
  Container,
  InformationContainer,
  ContentContainer,
} from "../../components/pageStyles/ProjectsContainers";
import ProjectElements from "../../components/pageComponents/projects/ProjectElement";
import { overlayStyle } from "../main";


const Projects = props => {
  const styles = {
    backgroundColor: "transparent",
  };
  return (
    <Container id={props.id}>
      <Image
        src={"/images/projects.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      {/* <div style={overlayStyle}></div> */}
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
