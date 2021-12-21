import Link from "next/link";
import classes from "./NavigationBar.module.css";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import CastConnectedIcon from "@material-ui/icons/CastConnected";

const Navigation = () => {
  return (
    <div className={classes.navbar}>
      <Link href="/home" passHref>
        <div className={classes.home}>
          <div className={classes.icon}>
            <HomeIcon />
          </div>
          <div className={classes.name}>Home</div>
        </div>
      </Link>
      <Link href="/about" passHref>
        <div className={classes.about}>
          <div className={classes.icon}>
            <InfoIcon />
          </div>
          <div className={classes.name}>About</div>
        </div>
      </Link>
      <Link href="/projects" passHref>
        <div className={classes.projects}>
          <div className={classes.icon}>
            <AccountTreeIcon />
          </div>
          <div className={classes.name}>Projects</div>
        </div>
      </Link>
      <Link href="/socials" passHref>
        <div className={classes.socials}>
          <div className={classes.icon}>
            <CastConnectedIcon />
          </div>
          <div className={classes.name}>Connect</div>
        </div>
      </Link>
    </div>
  );
};
export default Navigation;
