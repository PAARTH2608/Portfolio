import classes from "../styles/Start.module.css";
import KeyboardIcon from '@material-ui/icons/Keyboard';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

export default function Start() {

  return (
    <div className={classes.start}>
      
      <div className={classes.box}>
        <KeyboardIcon/>
        <div>
          <p>Surf the website without Voice Command manually.</p>
        </div>
      </div>
      <div className={classes.box}>
        <RecordVoiceOverIcon/>
        <div>
          <p>Navigate the website using Voice Command.</p>
        </div>
      </div>
    </div>
  );
}
