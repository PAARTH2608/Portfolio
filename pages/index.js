import { useState } from "react";
import Link from "next/link";
import classes from "../styles/Start.module.css";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import { useDispatch } from "react-redux";
import { voiceActions } from "../store/voice-slice";

export default function Start() {
  const [voice, setVoice] = useState(false);
  const voiceHandler = () => {
    setVoice(true);
  }
  const noVoiceHandler = () => {
    setVoice(false);
  }

  const dispatch = useDispatch();
  dispatch(voiceActions.updateVoiceCommand(voice))

  return (
    <div className={classes.start}>
      <Link href="/home" passHref>
        <div className={classes.box} onClick={() => setVoice(false)}>
          <KeyboardIcon className={classes.icons} />
          <div>
            <p>Surf the website manually navigating to every page.</p>
          </div>
        </div>
      </Link>
      <Link href="/home" passHref>
        <div className={classes.box} onClick={() => setVoice(true)}>
          <RecordVoiceOverIcon className={classes.icons} />
          <div>
            <p>Navigate the website using Voice Command.</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
