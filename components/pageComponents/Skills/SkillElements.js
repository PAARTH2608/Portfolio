import styled from "styled-components";

const Container = styled.div`
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 50px;
`;
const Skill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 10vh;
    width: 12vw;
    border: 2px solid #CEB7FF;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    color: #fff;
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0.3);
`;
const SkillElements = () => {
  return (
    <Container>
        <Skill>REACT.JS</Skill>
        <Skill>EXPRESS.JS</Skill>
        <Skill>JAVASCRIPT</Skill>
        <Skill>JAVA</Skill>
        <Skill>C++</Skill>
        <Skill>PYTHON</Skill>
        <Skill>ARTIFICIAL NEURAL NETWORKS</Skill>
        <Skill>AWS</Skill>
        <Skill>SQL AND NOSQL DB</Skill>

    </Container>
  );
};
export default SkillElements;
