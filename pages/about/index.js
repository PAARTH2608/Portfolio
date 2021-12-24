import Link from "next/link";
import Image from "next/image";
import classes from "../../styles/About.module.css";
import Navigation from "../../components/global/NavigationBar";
import TwitterIcon from "@material-ui/icons/Twitter";
import SchoolIcon from "@material-ui/icons/School";
import Robot from "../../components/global/Robot";
import Mic from "../../components/global/Mic";
import { useSelector } from "react-redux";

const About = () => {
  const voiceFac = useSelector((state) => state.voice.voiceFac);

  const content =
    "Hey there! Rigel this side. I am there to help you. For any queries click me to open chat page. I'll help my best to solve it.";
  const contentTwo =
    "Voice command is activated. You can now click on the icon and start speaking the commands mentioned.";

  return (
    <div className={classes.mainDiv}>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.part1}>
          <div className={classes.imgDiv}>
            <Image
              src="/myimg.png"
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </div>
          <div className={classes.smallDesc}>
            <h1>PAARTH JAIN</h1>
            <p>Software Developer || Machine Learning</p>
            <div className={classes.links}>
              <Link href="https://vit.ac.in/" passHref>
                <a className={classes.link} target="_blank">
                  <SchoolIcon style={{ color: "grey" }} />
                  <h2>VIT Vellore</h2>
                </a>
              </Link>
              <Link href="https://twitter.com/PAARTHJAIN7" passHref>
                <a className={classes.link} target="_blank">
                  <TwitterIcon style={{ color: "grey" }} />
                  <h2>@PAARTHJAIN7</h2>
                </a>
              </Link>
            </div>
            <div className={classes.orgns}>
              <h3>Organisations</h3>
              <p>&nbsp;RoboVITics</p>
              <p>&nbsp;ISA-VIT</p>
            </div>
          </div>
        </div>
        <div className={classes.part2}>
          <p></p>
        </div>
      </div>
      <Robot content={content} />
      {voiceFac && <Mic content={contentTwo} />}
    </div>
  );
};
export default About;
