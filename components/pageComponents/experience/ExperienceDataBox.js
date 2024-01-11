import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
  height: fit-content;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ceb7ff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3%;
`;
const Content = styled.p`
  background-color: transparent;
  font-size: 1.3rem;
  height: 100%;
  fontFamily: Montserrat, sans-serif;

  @media only screen and (max-width: 1040px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 640px) {
    font-size: 1rem;
  }
`;
const ExperienceDataBox = (props) => {

  return (
    <Container>
      <Content>{props.about}</Content>
    </Container>
  );
};
export default ExperienceDataBox;
