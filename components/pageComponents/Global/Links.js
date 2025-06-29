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
  
  const linkConfigs = [
    { to: "page1", icon: FaUserAstronaut, label: "About" },
    { to: "page2", icon: GiSkills, label: "Skills" },
    { to: "page3", icon: MdEngineering, label: "Experience" },
    { to: "page4", icon: FaProjectDiagram, label: "Projects" },
    { to: "page5", icon: MdCastConnected, label: "Contact" },
  ];

  return (
    <Container>
      {linkConfigs.map((config, index) => {
        const IconComponent = config.icon;
        return (
          <motion.div
            key={config.to}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1,
            }}
            style={styl}
          >
            <Link
              to={config.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={styles}
              activeClass="active"
              spyThrottle={500}
            >
              <IconComponent style={styles} className="icon" />
            </Link>
          </motion.div>
        );
      })}
    </Container>
  );
};
export default Links;
