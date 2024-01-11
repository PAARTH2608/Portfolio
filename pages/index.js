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
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #1e1e1e;
  height: 500vh;
`;

const Home = () => {
  const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);

  return (
    <MainContainer>
      {/* <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 100,
          restDelta: 0.001,
        }}
      /> */}
      <Head>
        <title>Paarth Jain</title>
      </Head>
      <Main id="page1" />
      <Skills id="page2" />
      <Experience id="page3" />
      <Projects id="page4" />
      <Contact id="page5" />
    </MainContainer>
  );
};
export default Home;
