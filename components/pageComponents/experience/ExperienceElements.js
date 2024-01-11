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
const MainHead = styled.h2`
  font-size: 2.6rem;
  background-color: transparent;
  fontfamily: "Bebas Neue", sans-serif;

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
const Heading = styled.h3`
  font-size: 1.8rem;
  background-color: transparent;
  fontfamily: "Bebas Neue", sans-serif;

  @media only screen and (max-width: 1040px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 740px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 740px) {
    font-size: 1rem;
  }
`;
const HelperDiv = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
    justifyContent: "center",
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
              <MainHead>{exp.title}</MainHead>
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
