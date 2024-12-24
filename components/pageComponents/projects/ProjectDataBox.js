import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const Container = styled.div`
  background-color: transparent;
  height: fit-content;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #ceb7ff;
  padding: 3%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Content = styled.p`
  background-color: transparent;
  font-size: 1.3rem;
  height: 60%;
  fontfamily: Montserrat, sans-serif;

  @media only screen and (max-width: 1040px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 740px) {
    font-size: 1rem;
  }
`;
const ProjectDataBox = (props) => {
  const styles = {
    backgroundColor: "transparent",
    color: "#CEB7FF",
    cursor: "pointer",
  };
  const linkStyles = {
    backgroundColor: "transparent",
  };
  const LinkDiv = styled.div`
    background-color: transparent;
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;

  return (
    <Container>
      <LinkDiv>
        {props.link && <Link href={props.link} style={linkStyles} target="_blank">
          <BsGithub size={30} style={styles} />
        </Link>}
        {props.deployment && (
          <Link href={props.deployment} style={linkStyles} target="_blank">
            <FaLink size={30} style={styles} />
          </Link>
        )}
      </LinkDiv>
      <Content>{props.content}</Content>
      <Content>
        TECH STACK :{" "}
        {props.tech.map((st, index) => (
          <span
            key={st}
            style={{
              backgroundColor: "transparent",
              color: "#CEB7FF",
            }}
          >
            {st}{index < props.tech.length - 1 ? ", " : ""}
          </span>
        ))}
      </Content>
    </Container>
  );
};
export default ProjectDataBox;
