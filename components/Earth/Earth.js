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
  bottom: 0%;
  left: 50%;
  transform: translate(-70%, 40%);
  @media screen and (max-width: 720px) {
    top: 100%;
    left: 0vw;
    transform: translate(35%, 50%);
    transition: transform 1s linear;
  }
  background-color: transparent;
`;
export const EarthImg = styled.img`
	width: 140%;
	height: 140%;
	animation: ${(props) => floatAnim(props.angle)} 6s ease-in-out infinite;
	transition: transform 0.3s;
  z-index: 999999;
  background-color: transparent;

	@media screen and (max-width: 720px) {
		width: 80vw;
	}
`;
EarthImg.defaultProps = {
  src: earth
}

const Earth = props => {
  const [scroll] = useScroll();
  return (
    <EarthDiv>
      {/* <Image src={earth} style={styles} height={200} width={200} alt="earth" /> */}
      <EarthImg src="/earth.svg" angle={-(scroll * 360) / 100} />
    </EarthDiv>
  );
};

export default Earth;
