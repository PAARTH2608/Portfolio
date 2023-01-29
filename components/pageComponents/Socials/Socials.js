import { Container } from "./SocialsStyles";

import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiLinkedin, SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Socials = () => {
  const styles = {
    backgroundColor: "transparent",
    color: "#CEB7FF",
    cursor: "pointer",
  };
  return (
    <Container>
      <BsGithub size={30} style={styles} />
      <BsTwitter size={30} style={styles} />
      <SiLinkedin size={30} style={styles} />
      <SiLeetcode size={30} style={styles} />
      <SiGmail size={30} style={styles} />
    </Container>
  );
};
export default Socials;
