import Navigation from "../../components/global/NavigationBar";
import classes from "../../styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.mainDiv}>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.filter}></div>
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
