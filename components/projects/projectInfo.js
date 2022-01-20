import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import classes from './ProjectInfo.module.css';
import PIC from '../../public/pic.png'
const ProjectInfo = props => {
    const style = { fontSize: "25", display: "flex", marginLeft: "auto" };
  return (
    <>
      <div className={classes.project}>
        <Image src={PIC} alt="paarth" width={379} height={175} />
        <div className={classes.heading}>
          <h3>{props.heading}</h3>
          <p>
            {props.desc}
          </p>
          <FaGithub style={style} />
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
