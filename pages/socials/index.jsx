import Navigation from "../../components/global/NavigationBar";
import classes from "../../styles/Socials.module.css";
import Robot from "../../components/global/Robot";
import Mic from "../../components/global/Mic";
import { useSelector } from "react-redux";

const Socials = () => {
  const voiceFac = useSelector((state) => state.voice.voiceFac);

  const content =
    "Hey there! Rigel this side. I am there to help you. For any queries click me to open chat page. I'll help my best to solve it.";
  const contentTwo =
    "Voice command is activated. You can now click on the icon and start speaking the commands mentioned.";
  return (
    <div className={classes.mainDiv}>
      <Navigation />
      <div className={classes.container}></div>
      <Robot content={content} />
      {voiceFac && <Mic content={contentTwo} />}
    </div>
  );
};
export default Socials;
