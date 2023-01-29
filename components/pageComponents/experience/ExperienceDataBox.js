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
  padding: 2%;
`;
const Content = styled.p`
  background-color: transparent;
  font-size: 1.3rem;
  height: 100%;
  font-family: Montserrat, sans-serif;
`;
const ExperienceDataBox = (props) => {

  return (
    <Container>
      <Content>{props.about}</Content>
    </Container>
  );
};
export default ExperienceDataBox;
