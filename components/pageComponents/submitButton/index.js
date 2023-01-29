import { useState } from "react";
import ReactiveButton from "reactive-button";
import styled from "styled-components";

const Button = () => {
  const Text = styled.h3`
    background-color: transparent;
  `;
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");

    // send an HTTP request
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  const style = {
    backgroundColor: "#CEB7FF",
  };

  return (
    <ReactiveButton
      buttonState={state}
      idleText={<Text>Send</Text>}
      loadingText={<Text>Loading</Text>}
      successText={<Text>Sent</Text>}
      onClick={onClickHandler}
      size="large"
    //   shadow
      style={style}
    />
  );
};

export default Button;
