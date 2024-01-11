import { Container } from "./LinksStyle";
import { motion } from "framer-motion";
import { GiSkills } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { MdCastConnected } from "react-icons/md";
import { FaProjectDiagram, FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-scroll/modules";

const Links = () => {
  const styles = {
    backgroundColor: "transparent",
    color: "#CEB7FF",
    cursor: "pointer",
  };
  const styl = {
    backgroundColor: "transparent",
  };
  return (
    <Container>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={styl}
      >
        <Link
          to={"page1"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={styles}
          activeClass="active"
        >
          <FaUserAstronaut style={styles} className="icon" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={styl}
      >
        <Link
          to={"page2"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={styles}
          activeClass="active"
        >
          <GiSkills style={styles} className="icon" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={styl}
      >
        <Link
          to={"page3"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={styles}
          activeClass="active"
        >
          <MdEngineering style={styles} className="icon" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={styl}
      >
        <Link
          to={"page4"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={styles}
          activeClass="active"
        >
          <FaProjectDiagram style={styles} className="icon" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={styl}
      >
        <Link
          to={"page5"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={styles}
          activeClass="active"
        >
          <MdCastConnected style={styles} className="icon" />
        </Link>
      </motion.div>
    </Container>
  );
};
export default Links;
