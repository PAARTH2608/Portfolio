import Link from "next/link";
import Navigation from "../../components/global/NavigationBar";
import classes from "../../styles/Socials.module.css";
import Mic from "../../components/global/Mic";
import { useSelector } from "react-redux";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Socials = () => {
  const voiceFac = useSelector((state) => state.voice.voiceFac);

  const content =
    "Voice command is activated. You can now click on the icon and start speaking the commands mentioned.";
  return (
    <div className={classes.mainDiv}>
      <Navigation />
      <div className={classes.row}>
        <div className={classes.container}>
          <div className={classes.inContainer}>
            <h1>Courses And Certifications</h1>
            <p>REACT JS - The Complete Guide - Udemy</p>
            <p>Docker And Kubernetes - Udemy</p>
            <p>Certificate of Participation - GWOC&apos;21</p>
            <p>
              Shape AI Certified Microsoft Learn Student
              Ambassador Program
            </p>
            <p>MATLAB - Onramp</p>
          </div>
          <div className={classes.inContainer}>
            <h1>Achievements</h1>
            <p>
              Girlscript Winter of Contributing - Contributor
            </p>
            <p>Current Semester CGPA - 8.89</p>
            <p>JEE Mains Rank - AIR 15137</p>
          </div>
          <div className={classes.inContainer}>
            <h1>Download CV</h1>
            <a href="Resume.pdf" download>
              <button>Download</button>
            </a>
          </div>
        </div>
        <div className={classes.ContainerOne}>
          <div className={classes.social}>
            <Link href="https://github.com/PAARTH2608">
              <a target="_blank">
                <FaGithub size={33} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/_paarth7_/">
              <a target="_blank">
                <FaInstagram size={33} />
              </a>
            </Link>
            <Link href="https://www.facebook.com/paarth.jain.906">
              <a target="_blank">
                <FaFacebookF size={33} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/paarth-jain-470522208/">
              <a target="_blank">
                <FaLinkedinIn size={33} />
              </a>
            </Link>
            <Link href="https://twitter.com/PAARTHJAIN7">
              <a target="_blank">
                <FaTwitter size={33} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {voiceFac && <Mic content={content} />}
    </div>
  );
};
export default Socials;
