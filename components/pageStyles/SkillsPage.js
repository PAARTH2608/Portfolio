import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1.5;
  position: relative;
`;
export const Layer = styled.div`
  background-color: black;
  z-index: 19999;
`;
export const InformationContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4vh;
  justify-content: flex-start;
  z-index: 999;
`;
export const SkillsContainer = styled.div`
  height: 60vh;
  width: 60%;
  background-color: transparent;
  z-index: 5;
  padding: 2%;
`;
export const Heading = styled.div`
  margin-top: 6vh;
  font-family: "Bebas Neue", sans-serif;
  background-color: transparent;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }

  @media only screen and (max-width: 1340px) {
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
export const HelperDiv = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
`;
export const ContactMeContainer = styled.div`
  height: 10vh;
  width: 10%;
  background-color: transparent;
`;
export const ClickOpenContainer = styled.div`
  margin-top: 15vh;
  position: relative;
  height: 27vh;
  width: 33%;
  background-color: transparent;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SocialContainer = styled.div`
  height: 50vh;
  width: 10%;
  position: absolute;
  left: 0;
  top: 15%;
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;
export const PressEnterContainer = styled.div`
  height: 20vh;
  width: 8%;
  background-color: transparent;
  position: absolute;
  left: 50px;
  bottom: 50px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;  
export const ScrollHeading = styled.div`
  font-family: "Bebas Neue";
  color: #ceb7ff;
  font-size: 1.3rem;
  font-weight: 600;
  background-color: transparent;
`;
export const Button = styled.div`
  background-color: transparent;
`; // a
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
`; // mouse
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
`; // inner
export const EarthContainer = styled.div`
  position: absolute;
  transform: translateY(85vh);
  height: 40vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30vh;
`;
export const GlowyEarth = styled.div`
  border: 1px solid green;
`;
export const Earth = styled.img``;
