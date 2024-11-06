import { Container } from "./SocialsStyles";
import { motion } from "framer-motion";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiGmail, SiLinkedin, SiLeetcode, SiHashnode  } from "react-icons/si";
import Link from "next/link";
import { FaMediumM } from "react-icons/fa";

const Socials = () => {
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
          href={"https://github.com/PAARTH2608"}
          target="_blank"
          style={styl}
        >
          <BsGithub style={styles} className="icon" />
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
          href={"https://twitter.com/PAARTHJAIN7"}
          target="_blank"
          style={styl}
        >
          <BsTwitter style={styles} className="icon" />
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
          href={"https://www.linkedin.com/in/paarth-jain-470522208/"}
          target="_blank"
          style={styl}
        >
          <SiLinkedin style={styles} className="icon" />
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
          href={"https://medium.com/@paarth.jain"}
          target="_blank"
          style={styl}
        >
          <FaMediumM style={styles} className="icon" />
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
          href={"https://itspaarth7.hashnode.dev/"}
          target="_blank"
          style={styl}
        >
          <SiHashnode  style={styles} className="icon" />
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
          href={"https://leetcode.com/PAARTH2608/"}
          target="_blank"
          style={styl}
        >
          <SiLeetcode style={styles} className="icon" />
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
          href={"mailto:jain.paarth2608@gmail.com"}
          target="_blank"
          style={styl}
        >
          <SiGmail style={styles} className="icon" />
        </Link>
      </motion.div>
    </Container>
  );
};

export default Socials;
