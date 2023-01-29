import Image from "next/image";
import { useScroll } from "./UseScroll";

import styled, { keyframes } from "styled-components";
import earth from "./earth.svg";

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
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 55%);
  @media screen and (max-width: 720px) {
    top: 100%;
    left: 0vw;
    transform: translate(35%, 50%);
    transition: transform 1s linear;
  }
  background-color: transparent;
`;

const Earth = () => {
  const [scroll] = useScroll();
  const styles = {
    backgroundColor: "transparent",
	width: "100%",
	height: "200vh",
	animation: `${(props) => floatAnim(-(scroll * 360) / 100)} 6s ease-in-out infinite`,
	transition: "transform 0.3s",
	zIndex: 999999
	// @media screen and (max-width: 720px) {
	//   width: 80vw;
	// }
  };
  return (
    <EarthDiv>
      <Image
        src={earth}
        style={styles}
        height={200}
        width={200}
        alt="earth"
      />
    </EarthDiv>
  );
};

export default Earth;
