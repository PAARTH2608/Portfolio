import styled from "styled-components";
import { projects } from "../../data/projectsData";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ProjectDataBox from "./ProjectDataBox";

const Container = styled.div`
  background-color: transparent;
  height: 50vh;
  width: 100%;
`;

const HeadingDiv = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 0 10%;

  @media only screen and (max-width: 1040px) {
    font-size: 2.3rem;
  }
  @media only screen and (max-width: 740px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 740px) {
    font-size: 1.6rem;
  }
`;

const ProjectElements = () => {
  const styles = {
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
  };
  const styles1 = {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    fontFamily: "Bebas Neue",
    fontSize: "3rem",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Container>
      <Swiper navigation={true} modules={[Navigation]} style={styles}>
        {projects.map((project) => (
          <SwiperSlide key={project.id} style={styles1}>
            <HeadingDiv>{project.title}</HeadingDiv>
            <ProjectDataBox
              content={project.content}
              link={project.link}
              tech={project.tech}
              deployment={project.deployment}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default ProjectElements;
