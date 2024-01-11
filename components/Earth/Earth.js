import Image from "next/image";
import { useScroll } from "./UseScroll";

import styled, { keyframes } from "styled-components";
import earth from "./earth.png";

const floatAnim = (angle) => keyframes`
	0% {
		transform: translate(0, -1%) rotate(${angle}deg);
	}
	50% {
		transform: translate(0, 1%) rotate(${angle}deg);
	}
	100% {
		transform: translate(0, -1%) rotate(${angle}deg);
	}
`;
export const EarthDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
export const EarthImg = styled.img`
  width: 70%;
  height: 70%;
  animation: ${(props) => floatAnim(props.angle)} 6s ease-in-out infinite;
  transition: transform 0.3s;
  z-index: 999999;
  background-color: transparent;

  @media screen and (max-width: 1320px) {
    width: 90%;
    height: 90%;
  }
  @media screen and (max-width: 1080px) {
    width: 150%;
    height: 150%;
  }
`;
EarthImg.defaultProps = {
  src: earth,
};

const Earth = () => {
  const [scroll] = useScroll();
  return (
    <EarthDiv>
      <EarthImg src="/earth.svg" angle={-(scroll * 365) / 100} />
    </EarthDiv>
  );
};

export default Earth;
