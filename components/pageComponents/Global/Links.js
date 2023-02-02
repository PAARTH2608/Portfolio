import { Container } from "./LinksStyle";
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
  return (
    <Container>
      <Link
        to={"page1"}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={styles}
        activeClass="active"
      >
        <FaUserAstronaut size={30} style={styles} />
      </Link>
      <Link
        to={"page2"}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={styles}
        activeClass="active"
      >
        <GiSkills size={30} style={styles} />
      </Link>
      <Link
        to={"page3"}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={styles}
        activeClass="active"
      >
        <MdEngineering size={30} style={styles} />
      </Link>
      <Link
        to={"page4"}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={styles}
        activeClass="active"
      >
        <FaProjectDiagram size={30} style={styles} />
      </Link>
      <Link
        to={"page5"}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={styles}
        activeClass="active"
      >
        <MdCastConnected size={30} style={styles} />
      </Link>
    </Container>
  );
};
export default Links;
