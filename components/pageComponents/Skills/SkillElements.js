import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 30px;
  column-gap: 10px;

  @media only screen and (max-width: 1340px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 740px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 5px;
  }
`;
const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: 10vh;
  width: 12vw;
  border: 2px solid #ceb7ff;
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  color: #fff;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 1340px) {
    font-size: 1.3rem;
    width: 15vw;
  }
  @media only screen and (max-width: 740px) {
    width: 30vw;
    height: 8vh;
    font-size: 1rem;
  }
  // @media only screen and (max-width: 900px) {
  //   font-size: 1.1rem;
  // }
  // @media only screen and (max-width: 600px) {
  //   font-size: 0.9rem;
  // }
`;
const SkillElements = () => {
  return (
    <Container>
      <Skill>BACKEND ARCHITECTURES</Skill>
      <Skill>NEXT.JS</Skill>
      <Skill>MERN STACK</Skill>
      <Skill>RUST</Skill>
      <Skill>JAVA - SPRINGBOOT</Skill>
      <Skill>DOCKER & KUBERNETES</Skill>
      <Skill>C++</Skill>
      <Skill>PYTHON, DJANGO AND FASTAPI</Skill>
      <Skill>ARTIFICIAL NEURAL NETWORKS</Skill>
      <Skill>AWS</Skill>
      <Skill>DATA STRUCTURES & ALGORITHMS</Skill>
      <Skill>DATABASES</Skill>
    </Container>
  );
};
export default SkillElements;
