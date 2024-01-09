import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ProjectDataBox from "./ExperienceDataBox";
import { experience } from "../../data/experienceData";

const Container = styled.div`
  background-color: transparent;
  height: 50vh;
  width: 100%;
  z-index: 3;
`;

const HeadingContainer = styled.div`
  width: 100%;
`;
const Heading = styled.h3`
  font-size: 1.8rem;
  background-color: transparent;
  fontFamily: "Bebas Neue", sans-serif;
`;
const HelperDiv = styled.div`
  background-color: transparent;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10%;
`;

const ExperienceElements = () => {
  const styles = {
    background: "transparent !important",
    height: "100%",
    width: "100%",
  };
  const styles1 = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(255, 0, 0, 0)",
    fontFamily: "Bebas Neue",
    fontSize: "3rem",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  };
  return (
    <Container>
      <Swiper navigation={true} modules={[Navigation]} style={styles}>
        {experience.map((exp) => (
          <SwiperSlide key={exp.id} style={styles1}>
            <HelperDiv>
              {exp.title}
              <br />
              {/* <HeadingContainer></HeadingContainer> */}
              <Heading>{exp.date}</Heading>
            </HelperDiv>
            <ProjectDataBox about={exp.about} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default ExperienceElements;
