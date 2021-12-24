import React, { useState } from "react";
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import classes from './Mic.module.css'

const Mic = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div
        className={classes.mic}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <KeyboardVoiceIcon />
      </div>
      {hover && <div className={classes.dialogue}>{props.content}</div>}
    </>
  );
};

export default Mic;
