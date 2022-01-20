import React, { useState } from "react";
import Link from "next/link";
import classes from "../styles/Start.module.css";
import Spinner from "../components/home/spinner";
import Mic from "../components/global/Mic";
import { useSelector, useDispatch } from "react-redux";
import { voiceActions } from "../store/voice-slice";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

export default function Start() {
  const voiceFac = useSelector((state) => state.voice.voiceFac);

  const contentTwo =
    "Voice command is activated. You can now click on the icon and start speaking the commands mentioned.";

  const [voice, setVoice] = useState(false);
  const dispatch = useDispatch();
  dispatch(voiceActions.updateVoiceCommand(voice));

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.container}>
          <div className={classes.homeHeading}>
            <h1>PAARTH JAIN</h1>
          </div>
          <div className={classes.homePara}>
            <p>MERN Stack Developer & Machine Learning Engineer</p>
          </div>
          <div className={classes.homeButton}>
            {/* <Spinner /> */}
            {voiceFac && <Mic content={contentTwo} />}
          </div>
        </div>

        <div className={classes.start}>
          <Link href="/about" passHref>
            <div className={classes.box} onClick={() => setVoice(false)}>
              <KeyboardIcon className={classes.icons} />
              <div>
                <p>Surf the website manually navigating to every page.</p>
              </div>
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className={classes.box} onClick={() => setVoice(true)}>
              <RecordVoiceOverIcon className={classes.icons} />
              <div>
                <p>Navigate the website using Voice Command.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
