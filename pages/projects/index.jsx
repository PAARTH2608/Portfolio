import { useState } from "react";
import Image from "next/image";
import Navigation from "../../components/global/NavigationBar";
import classes from "../../styles/Projects.module.css";
import MaterialUISwitch from "../../components/global/Switch";
import Robot from "../../components/global/Robot";
import Mic from "../../components/global/Mic";
import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const voiceFac = useSelector((state) => state.voice.voiceFac);

  const content =
    "Hey there! Rigel this side. I am there to help you. For any queries click me to open chat page. I'll help my best to solve it.";
  const contentTwo =
    "Voice command is activated. You can now click on the icon and start speaking the commands mentioned.";

  const [hide, setHide] = useState("true");
  const style = { fontSize: "25", display: "flex", marginLeft: "auto" }
  return (
    <div className={classes.mainDiv}>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.filter}>
          <h3>
            Projects And Open Source Contributions
          </h3>
          {!hide && <input placeholder="Search" className={classes.input} />}
          {hide && (
            <div className={classes.buttons}>
              <button>NEW</button>
              <button>OLD</button>
            </div>
          )}
          <MaterialUISwitch onClick={() => setHide(!hide)} />
        </div>
        <div className={classes.projectContainer}>
          <div className={classes.project}>
            <Image src="/myimg.png" alt="paarth" width={379} height={175} />
            <div className={classes.heading}>
              <h3>Portfolio Website</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo explicabo neque quod laboriosam enim.</p>
              <FaGithub style={style} />
            </div>
          </div>
          <div className={classes.project}>
            <Image src="/myimg.png" alt="paarth" width={379} height={175} />
            <div className={classes.heading}>
              <h3>Portfolio Website</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo explicabo neque quod laboriosam enim.</p>
              <FaGithub style={style} />
            </div>
          </div>
          <div className={classes.project}>
            <Image src="/myimg.png" alt="paarth" width={379} height={175} />
            <div className={classes.heading}>
              <h3>Portfolio Website</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo explicabo neque quod laboriosam enim.</p>
              <FaGithub style={style} />
            </div>
          </div>
          <div className={classes.project}>
            <Image src="/myimg.png" alt="paarth" width={379} height={175} />
            <div className={classes.heading}>
              <h3>Portfolio Website</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo explicabo neque quod laboriosam enim.</p>
              <FaGithub style={style} />
            </div>
          </div>
          <div className={classes.project}>
            <Image src="/myimg.png" alt="paarth" width={379} height={175} />
            <div className={classes.heading}>
              <h3>Portfolio Website</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo explicabo neque quod laboriosam enim.</p>
              <FaGithub style={style} />
            </div>
          </div>
          
        </div>
      </div>
      <Robot content={content} />
      {voiceFac && <Mic content={contentTwo} />}
    </div>
  );
};
export default Projects;
