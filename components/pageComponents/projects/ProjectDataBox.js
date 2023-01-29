import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  background-color: transparent;
  height: fit-content;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ceb7ff;
  padding: 2%;
  padding-bottom: 4%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Content = styled.p`
  background-color: transparent;
  font-size: 1.3rem;
  height: 60%;
  font-family: Montserrat, sans-serif;
`;
const ProjectDataBox = (props) => {
  const styles = {
    backgroundColor: "transparent",
    color: "#CEB7FF",
    cursor: "pointer"
  };
  const linkStyles = {
    backgroundColor: "transparent",
  }
  return (
    <Container>
      <Link
        href={props.link}
        style={linkStyles}
        target="_blank"
      >
        <BsGithub size={40} style={styles} />
      </Link>
      <Content>{props.content}</Content>
    </Container>
  );
};
export default ProjectDataBox;
