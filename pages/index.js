import Link from "next/link";
import classes from "../styles/Start.module.css";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

export default function Start() {
  return (
    <div className={classes.start}>
      <Link href="/home" passHref>
        <div className={classes.box}>
          <KeyboardIcon />
          <div>
            <p>Surf the website without Voice Command manually.</p>
          </div>
        </div>
      </Link>
      <Link href="/home" passHref>
        <div className={classes.box}>
          <RecordVoiceOverIcon />
          <div>
            <p>Navigate the website using Voice Command.</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
