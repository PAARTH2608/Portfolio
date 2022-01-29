import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import classes from './ProjectInfo.module.css';

const ProjectInfo = props => {
    const style = { fontSize: "25", display: "flex", marginLeft: "auto", cursor: "pointer" };
  return (
    <>
      <div className={classes.project}>
        <Image src={props.img} alt="paarth" width={379} height={175} />
        <div className={classes.heading}>
          <h3>{props.heading}</h3>
          <p>
            {props.desc}
          </p>
          <Link href={props.link}>
              <a target="_blank">
              <FaGithub style={style}/>
              </a>
          </Link>
      
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
