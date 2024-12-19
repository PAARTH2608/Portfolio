import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1.5;
`;
export const InformationContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`;
export const HelperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
  z-index: 9999;
  position: relative;
`;
export const ContactMeContainer = styled.div`
  height: 10vh;
  width: 15%;
  background-color: transparent;
  z-index: 999;
  position: fixed;
  right: 0;
  top: 0;
  padding-top: 2vh;
  cursor: pointer;
`;
export const Text = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  font-size: 2rem;
  color: white;
  position: absolute;
  height: 100%;
  background: transparent;
  z-index: 999999;

  @media only screen and (max-width: 1340px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
export const ClickOpenContainer = styled.div`
  position: relative;
  height: 50vh;
  width: 33%;
  background-color: transparent;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    width:80%;
    height: 60vh;
  }
`;
export const SocialContainer = styled.div`
  height: 50vh;
  width: 10%;
  position: fixed;
  left: 0;
  top: 15%;
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  z-index: 9999;
`;
export const LinksContainer = styled.div`
  height: 50vh;
  width: 10%;
  position: fixed;
  right: 0;
  top: 15%;
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  z-index: 99999;
`;
export const VisitCountContainer = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  color: white;
  z-index: 99999;
  height: 7vh;
  width: fit;
  padding: 2vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ceb7ff;
  border: 3px solid #ceb7ff;
  border-radius: 23px;

  @media only screen and (max-width: 700px) {
    border: none
  }
`;
export const PressEnterContainer = styled.div`
  height: 20vh;
  width: 8%;
  background-color: transparent;
  position: fixed;
  left: 25px;
  bottom: 10px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  z-index: 9999;

  @media only screen and (max-width: 700px) {
    bottom: 0px;
  }
`;

export const ScrollHeading = styled.div`
  font-family: "Bebas Neue";
  color: #ceb7ff;
  font-size: 1.3rem;
  font-weight: 600;
  background-color: transparent;

  @media only screen and (max-width: 1920px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 1540px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 15px;
  }
`;
export const Button = styled.div`
  background-color: transparent;
`;
export const Span1 = styled.div`
  background-color: transparent;
  @-webkit-keyframes ani-mouse {
    0% {
      opacity: 1;
      top: 29%;
    }
    15% {
      opacity: 1;
      top: 50%;
    }
    50% {
      opacity: 0;
      top: 50%;
    }
    100% {
      opacity: 0;
      top: 29%;
    }
  }
  @-moz-keyframes ani-mouse {
    0% {
      opacity: 1;
      top: 29%;
    }
    15% {
      opacity: 1;
      top: 50%;
    }
    50% {
      opacity: 0;
      top: 50%;
    }
    100% {
      opacity: 0;
      top: 29%;
    }
  }
  @keyframes ani-mouse {
    0% {
      opacity: 1;
      top: 29%;
    }
    15% {
      opacity: 1;
      top: 50%;
    }
    50% {
      opacity: 0;
      top: 50%;
    }
    100% {
      opacity: 0;
      top: 29%;
    }
  }
  &:hover,
  &:focus,
  &.active {
    color: #ceb7ff;
  }
  &:hover,
  &:focus,
  &:active,
  &.active {
    opacity: 0.8;
    filter: alpha(opacity=80);
  }
  position: relative;
  display: block;
  width: 35px;
  height: 55px;
  margin: 0 auto 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid #ceb7ff;
  border-radius: 23px;

  @media only screen and (max-width: 1540px) {
    height: 50px;
    width: 30px;
  }
  @media only screen and (max-width: 1200px) {
    height: 45px;
    width: 25px;
    border: none;
  }
  @media only screen and (max-width: 700px) {
    height: 40px;
    width: 20px;
  }
`;
export const Span2 = styled.div`
  position: absolute;
  display: block;
  top: 29%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  background: white;
  border-radius: 50%;
  -webkit-animation: ani-mouse 2.5s linear infinite;
  -moz-animation: ani-mouse 2.5s linear infinite;
  animation: ani-mouse 2.5s linear infinite;
  background-color: #ceb7ff;
`;
export const EarthContainer = styled.div`
  position: fixed;
  transform: translateY(70vh);
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: 720px) {
		transform: translateY(40vh);
	}
`;
export const GlowyEarth = styled.div`
  border: 1px solid green;
`;
// export const Earth = styled.img``;
