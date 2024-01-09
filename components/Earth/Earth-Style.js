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
  top: 10%;
  left: 1000px;
  width: 100px;
  transform: translate(-23vw, -50%);
  @media screen and (MaxWidth: 720px) {
    top: 100%;
    left: 0vw;
    transform: translate(35%, -50%);
    transition: transform 1s linear;
  }
  background-color: transparent;
`;
export const EarthImg = styled.img.attrs({
  src: `${earth}`,
})`
  width: 40vw;
  height: auto;
  animation: ${(props) => floatAnim(props.angle)} 6s ease-in-out infinite;
  transition: transform 0.3s;

  @media screen and (MaxWidth: 720px) {
    width: 80vw;
  }
`;
