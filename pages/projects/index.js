import Image from "next/image";
import {
  Container,
  InformationContainer,
  ContentContainer,
} from "../../components/pageStyles/ProjectsContainers";
import ProjectElements from "../../components/pageComponents/projects/ProjectElement";


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
      {/* <Link href={"/contact"}>
        <ScrollButtonContainer left>
          <ScrollHeading>Click</ScrollHeading>
          <Button>
            <Span1>
              <AiOutlineArrowDown style={arrowStyle} />
            </Span1>
          </Button>
        </ScrollButtonContainer>
      </Link> */}
    </Container>
  );
};
export default Projects;
