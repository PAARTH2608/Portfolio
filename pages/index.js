import Head from "next/head";
import Main from "./main";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";

import styled from "styled-components";
import Transition from "../framer/Transition";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  height: fit-content;
`;
const Home = () => {
  return (
    <Transition>
      <MainContainer>
        <Head>
          <title>Portfolio</title>
        </Head>
        <Main />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </MainContainer>
    </Transition>
  );
};
export default Home;
