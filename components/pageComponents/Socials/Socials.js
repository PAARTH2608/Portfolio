import { Container } from "./SocialsStyles";

import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiLinkedin, SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const Socials = () => {
  const styles = {
    backgroundColor: "transparent",
    color: "#CEB7FF",
    cursor: "pointer",
  };
  return (
    <Container>
      <Link
        href={"https://github.com/PAARTH2608"}
        target="_blank"
        style={styles}
      >
        <BsGithub size={30} style={styles} />
      </Link>
      <Link
        href={"https://twitter.com/PAARTHJAIN7"}
        target="_blank"
        style={styles}
      >
        <BsTwitter size={30} style={styles} />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/paarth-jain-470522208/"}
        target="_blank"
        style={styles}
      >
        <SiLinkedin size={30} style={styles} />
      </Link>
      <Link
        href={"https://leetcode.com/PAARTH2608/"}
        target="_blank"
        style={styles}
      >
        <SiLeetcode size={30} style={styles} />
      </Link>
      <Link
        href={"mailto:jain.paarth2608@gmail.com"}
        target="_blank"
        style={styles}
      >
        <SiGmail size={30} style={styles} />
      </Link>
    </Container>
  );
};
export default Socials;
