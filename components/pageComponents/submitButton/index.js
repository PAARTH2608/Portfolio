import { useState } from "react";
import ReactiveButton from "reactive-button";
import styled from "styled-components";

const BTN = styled.button`
  background-color: #9361ff;
  outline: none;
  border: none;
  height: 5vh;
  width: 82%;
  margin-left: 18%;
  color: white;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.3rem;
  border-radius: 5px;
`;
const Button = () => {
  

  return <BTN
    type="submit"
  >{state}</BTN>;
};

export default Button;
