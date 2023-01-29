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
    justifyContent: "space-around",
    backgroundColor: "transparent",
    "font-family": "Bebas Neue",
    "font-size": "3rem",
    color: "#fff",
    display: "flex",
    "flex-direction": "column",
  };
  
  return (
    <Container>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        style={styles}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} style={styles1}>
            {project.title}
            <ProjectDataBox content={project.content} link={project.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default ProjectElements;
