import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import classes from './Robot.module.css'

const Robot = (props) => {
  const [hover, setHover] = useState(false);

  const content = props.content;

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div
        className={classes.robot}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <FaRobot />
      </div>
      {hover && <div className={classes.dialogue}>{props.content}</div>}
    </>
  );
};

export default Robot;
