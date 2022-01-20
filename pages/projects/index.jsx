import { useState } from "react";
import Navigation from "../../components/global/NavigationBar";
import classes from "../../styles/Projects.module.css";
import MaterialUISwitch from "../../components/global/Switch";
import Mic from "../../components/global/Mic";
import { useSelector } from "react-redux";
import ProjectInfo from "../../components/projects/ProjectInfo";
import { ProjectsData } from "../../components/data/projectsData";

const Projects = () => {
  const voiceFac = useSelector((state) => state.voice.voiceFac);

  const contentTwo =
    "Voice command is activated. You can now click on the icon and start speaking the commands mentioned.";

  const [hide, setHide] = useState("true");
  const style = { fontSize: "25", display: "flex", marginLeft: "auto" };

  return (
    <div className={classes.mainDiv}>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.filter}>
          <h3>Projects And Open Source Contributions</h3>
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
          {ProjectsData.map((project) => (
            <ProjectInfo
              key={project.id}
              // img={project.img}
              heading={project.heading}
              desc={project.description}
            />
          ))}
        </div>
      </div>
      {voiceFac && <Mic content={contentTwo} />}
    </div>
  );
};
export default Projects;
