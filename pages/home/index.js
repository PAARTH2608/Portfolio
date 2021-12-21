import React, { useState } from "react";
import Link from "next/link";
import classes from "../../styles/Home.module.css";
import Spinner from "../../components/home/spinner";
import { FaRobot } from "react-icons/fa";

const Home = () => {
  const [hover, setHover] = useState(false);

  const content =
    "Hey there! Rigel this side. I am there to help you. For any queries click me to open chat page. I'll help my best to solve it.";

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className={classes.mainDiv}>
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
          <div
            className={classes.robot}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <FaRobot />
          </div>
        </div>
      </div>
      {hover && <div className={classes.dialogue}>{content}</div>}
    </div>
  );
};
export default Home;
