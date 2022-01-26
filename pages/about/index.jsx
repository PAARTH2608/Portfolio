import Link from "next/link";
import Image from "next/image";
import classes from "../../styles/About.module.css";
import Navigation from "../../components/global/NavigationBar";
import TwitterIcon from "@material-ui/icons/Twitter";
import SchoolIcon from "@material-ui/icons/School";
import Mic from "../../components/global/Mic";
import { useSelector } from "react-redux";
import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaBootstrap,
  FaDocker,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHackerrank,
} from "react-icons/fa";

const About = () => {
  const voiceFac = useSelector((state) => state.voice.voiceFac);

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
              <p>&nbsp;&bull;&nbsp;RoboVITics</p>
              <p>&nbsp;&bull;&nbsp;ISA-VIT</p>
            </div>
          </div>
        </div>
        <div className={classes.part2}>
          <p>Hey there! How is it going everybody.</p>
          <p>
            I am currently a 2nd year undergraduate student at VIT Vellore
            pursuing B.Tech in Computer And Engineering.
          </p>
          <p>
            Started my dev journey right from the first year contributing to
            open source, I learnt alot from there.
          </p>
          <p>
            Currently I am a full stack web developer working on MERN Stack.
          </p>
          <p>
            Seeing the influence of Machines in our day to day life, I was
            overwhelmed by the technology which inspired me to explore Machine
            Learning.
          </p>
          <h2>SKILLS</h2>
          <div className={classes.icons}>
            <FaReact size={40} />
            {/* <p>ReactJS</p> */}
            <FaNodeJs size={40} />
            {/* <p>NodeJS</p> */}
            <FaPython size={40} />
            {/* <p>Python</p> */}
            <FaJava size={40} />
            {/* <p>Java</p> */}
            <FaJsSquare size={40} />
            {/* <p>Javascript</p> */}
            <FaBootstrap size={40} />
            {/* <p>Bootstrap</p> */}
            <FaHtml5 size={40} />
            {/* <p>HTML</p> */}
            <FaCss3Alt size={40} />
            {/* <p>CSS</p> */}
            <FaLinux size={40} />
            {/* <p>Linux</p> */}
            <FaDocker size={40} />
            {/* <p>Docker</p> */}
            <FaDatabase size={40} />
            {/* <p>MongoDB</p> */}
            <FaGitAlt size={40} />
            {/* <p>GIT</p> */}
            <FaHackerrank size={40} />
            {/* <p>HackerRank</p> */}
          </div>
          <h2>My GOAL</h2>
          <p>
            My ultimate goal is to provide efficient solution to real-life
            problems and to create new opportunities for employment utilizing my
            knowledge in Web Development, Machine Learning and Bussiness
            Architecture.
          </p>
          <div className={classes.github}>
            <Link href="https://github.com/PAARTH2608" passHref>
              <a target="_blank">
                <FaGithub size={35} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {voiceFac && <Mic content={contentTwo} />}
    </div>
  );
};
export default About;
