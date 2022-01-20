import Navigation from "../../components/global/NavigationBar";
import classes from "../../styles/Socials.module.css";
import Mic from "../../components/global/Mic";
import { useSelector } from "react-redux";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Socials = () => {
  const voiceFac = useSelector((state) => state.voice.voiceFac);

  const content =
    "Hey there! Rigel this side. I am there to help you. For any queries click me to open chat page. I'll help my best to solve it.";
  const contentTwo =
    "Voice command is activated. You can now click on the icon and start speaking the commands mentioned.";
  return (
    <div className={classes.mainDiv}>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.inContainer}>
          <h1>Achievements</h1>
          <p>&nbsp;&bull;&nbsp;Current Semester CGPA - 8.89</p>
          <p>&nbsp;&bull;&nbsp;JEE Mains Rank - AIR 15137</p>
          <p>&nbsp;&bull;&nbsp;Girlscript Winter of Contributing - Contributor</p>
        </div>
        <div className={classes.inContainer}>
          <h1>Courses And Certifications</h1>
          <p>&nbsp;&bull;&nbsp;Certificate of Participation - GWOC&apos;21</p>
          <p>&nbsp;&bull;&nbsp;Shape AI Certified Microsoft Learn Student Ambassador Program</p>
          <p>&nbsp;&bull;&nbsp;MATLAB - Onramp</p>

        </div>
        <div className={classes.inContainer}>
          <h1>Download CV</h1>
          <button>Download</button>
        </div>
        <div className={classes.inContainer}>
          <h1>Follow Me</h1>
          <div>
            <FaGithub size={35} />
            <FaInstagram size={35} />
            <FaFacebookF size={35} />
            <FaLinkedinIn size={35} />
            <FaTwitter size={35} />
          </div>
        </div>
      </div>
      {voiceFac && <Mic content={contentTwo} />}
    </div>
  );
};
export default Socials;
