import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  z-index: 1;
  min-height: 100vh;
  // padding: 4rem 0;

  &::after {
    content: "";
    display: block;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
export const InformationContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
export const ScrollButtonContainer = styled.div`
  height: 20vh;
  width: 8%;
  background-color: transparent;
  border: 1px solid #ceb7ff;
  position: absolute;
  right: ${props => props.left ? "50px" : "unset"};
  left: ${props => props.left ? "unset" : "50px"};
  bottom: 50px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
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
// export const Earth = styled.img``;
