import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  InformationContainer,
  ClickOpenContainer,
} from "../../components/pageStyles/MainPage";

export const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
};
const Main = (props) => {
  const styles = {
    backgroundColor: "transparent",
  };

  const styles1 = {
    backgroundColor: "transparent",
    width: "85%",
    cursor: "pointer",
  };

  const [toggle, setToggle] = useState(true);
  const openHandler = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <Container id={props.id}>
      <Image
        src={"/images/background-1.png"}
        alt="background"
        fill
        style={{
          objectFit: "cover"
        }}
      />
      <div style={overlayStyle}></div>
      <InformationContainer>
        <Image
          src={"/infoMainPage.svg"}
          height={250}
          width={700}
          className="introImg"
          alt="mainbgimg"
        />
        <ClickOpenContainer>
          {toggle && (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: toggle ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              onClick={openHandler}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <Image
                src={"/clicktoopen.svg"}
                alt="leftBorder"
                height={100}
                width={100}
                style={styles1}
              />
            </motion.div>
          )}
          <AnimatePresence>
            {!toggle && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                onClick={openHandler}
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <Image
                  src="/mainpageinfo.svg"
                  alt="mainpageinfo"
                  height={400}
                  width={600}
                  className="mainPage"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </ClickOpenContainer>
      </InformationContainer>
    </Container>
  );
};

export default Main;
