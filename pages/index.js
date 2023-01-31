import Head from "next/head";
import Main from "./main";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";

import styled from "styled-components";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../framer/useFollowPointer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  height: fit-content;
`;

const Home = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <MainContainer>
      <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
      <Head>
        <title>Portfolio</title>
      </Head>
      <Main />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </MainContainer>
  );
};
export default Home;
