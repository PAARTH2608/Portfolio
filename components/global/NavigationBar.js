import Link from "next/link";
import classes from "./NavigationBar.module.css";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import CastConnectedIcon from "@material-ui/icons/CastConnected";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <div className={classes.navbar}>
      <Link href="/" passHref>
        <div className={classes.home}>
          <div className={router.pathname == "/" ? classes.active : classes.common} >
            <div className={classes.icon}>
              <HomeIcon />
            </div>
            <div className={classes.name}>Home</div>
          </div>
        </div>
      </Link>
      <Link href="/about" passHref>
        <div className={classes.about}>
          <div className={router.pathname == "/about" ? classes.active : classes.common} >
            <div className={classes.icon}>
              <InfoIcon />
            </div>
            <div className={classes.name}>About</div>
          </div>
        </div>
      </Link>
      <Link href="/projects" passHref>
        <div className={classes.projects}>
          <div className={router.pathname == "/projects" ? classes.active : classes.common} >
            <div className={classes.icon}>
              <AccountTreeIcon />
            </div>
            <div className={classes.name}>Projects</div>
          </div>
        </div>
      </Link>
      <Link href="/socials" passHref>
        <div className={classes.socials}>
          <div className={router.pathname == "/socials" ? classes.active : classes.common} >
            <div className={classes.icon}>
              <CastConnectedIcon />
            </div>
            <div className={classes.name}>Connect</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Navigation;
