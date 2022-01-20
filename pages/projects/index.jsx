import { useState } from "react";
import Navigation from "../../components/global/NavigationBar";
import classes from "../../styles/Projects.module.css";
import Mic from "../../components/global/Mic";
import { useSelector } from "react-redux";
import ProjectInfo from "../../components/projects/ProjectInfo";
import { ProjectsData } from "../../components/data/projectsData";

const Projects = () => {
  const [search, setSearch] = useState("");
  const voiceFac = useSelector((state) => state.voice.voiceFac);

  const contentTwo =
    "Voice command is activated. You can now click on the icon and start speaking the commands mentioned.";

  const handler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.mainDiv}>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.filter}>
          <h3>Projects And Open Source Contributions</h3>
          <input
            placeholder="Search"
            className={classes.input}
            onChange={handler}
          />
        </div>
        <div className={classes.projectContainer}>
          {ProjectsData.filter((val) => {
            if (search == "") return val;
            else if (val.heading.toLowerCase().includes(search.toLowerCase()))
              return val;
          }).map((project) => (
            <ProjectInfo
              key={project.id}
              // img={project.img}
              heading={project.heading}
              desc={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
      {voiceFac && <Mic content={contentTwo} />}
    </div>
  );
};
export default Projects;
