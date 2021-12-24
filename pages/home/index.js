import React, { useState } from "react";
import Link from "next/link";
import classes from "../../styles/Home.module.css";
import Spinner from "../../components/home/spinner";
import { useRouter } from "next/router";
import Robot from "../../components/global/Robot";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Mic from "../../components/global/Mic";
import { useSelector } from 'react-redux';

const Home = () => {
  const [hover, setHover] = useState(false);
  const voiceFac = useSelector(state => state.voice.voiceFac);

  const contentOne = "Hey there! Rigel this side. I am there to help you. For any queries click me to open chat page. I'll help my best to solve it.";
  const contentTwo = "Voice command is activated. You can now click on the icon and start speaking the commands mentioned."

  return (
    <div className={classes.mainDiv}>
      <Link href='/' passHref>
      <div className={classes.arrow}>
        <ArrowBackIcon />
      </div>
      </Link>
      <div className={classes.container}>
        <div className={classes.homeHeading}>
          <h1>PAARTH JAIN</h1>
        </div>
        <div className={classes.homePara}>
          <p>MERN Stack Developer & Machine Learning</p>
        </div>
        <div className={classes.homeButton}>
          <Link href="/about" passHref>
            <button>EXPLORE</button>
          </Link>
          {/* <Spinner /> */}
          <Robot content={contentOne} />
          {voiceFac && <Mic content={contentTwo} />}
        </div>
      </div>
    </div>
  );
};
export default Home;
