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
    // "text-align": "center",
    // "-webkit-animation": "glow 1s ease-in-out infinite alternate",
    // "-moz-animation": "glow 1s ease-in-out infinite alternate",
    // "animation": "glow 1s ease-in-out infinite alternate",

    // "@-webkit-keyframes glow" : {
    //   "from" :{
    //     "text-shadow": "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;"
    //   },
    //   "to": {
    //     "text-shadow": "0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;"
    //   }
    // }
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
