import Navigation from "../../components/global/NavigationBar";
import classes from "../../styles/Projects.module.css";
import MaterialUISwitch from "../../components/global/Switch";

const Projects = () => {
  return (
    <div className={classes.mainDiv}>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.filter}>
          <h3>
            Projects can be filtered based on their Name and Time of Creation
          </h3>
          <input />
          <div>
            <button>Latest</button>
            <button>Old</button>
          </div>
          <MaterialUISwitch />
        </div>
        <div className={classes.projectContainer}>
          <div className={classes.project}></div>
          <div className={classes.project}></div>
          <div className={classes.project}></div>
          <div className={classes.project}></div>
          <div className={classes.project}></div>
          <div className={classes.project}></div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
