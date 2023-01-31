import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const DIV = styled.div`
  overflow: hidden;
`;
const EarthTransition = ({ children }) => {
  return (
    <DIV>
      <AnimatePresence>
        <motion.div
          animate={{ rotate: 0 }}
          // transition={{
          //   repeat: 1,
          //   repeatType: "loop",
          //   duration: 2,
          // }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </DIV>
  );
};

export default EarthTransition;
