import React, { useState } from "react";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import classes from "./Mic.module.css";
import { useRouter } from "next/router";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Mic = (props) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = ["home", "about", "projects", "socials"];
  const urls = {
    home: "/home",
    about: "/about",
    projects: "/projects",
    socials: "/socials",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      router.push({
        pathname: urls[redirectUrl],
      });
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  return (
    <>
      <div
        className={classes.mic}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={SpeechRecognition.startListening}
      >
        <KeyboardVoiceIcon />
      </div>
      {hover && <div className={classes.dialogue}>{props.content}</div>}
      
    </>
  );
};

export default Mic;
