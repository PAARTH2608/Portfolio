import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  position: relative;
`;
export const InformationContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContentContainer = styled.div`
  height: 60vh;
  width: 60%;
  background-color: transparent;
  z-index: 3;
  padding: 2%;
`;
export const HelperDiv = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
  z-index: 999;
`;
export const ContactMeContainer = styled.div`
  height: 10vh;
  width: 10%;
  background-color: transparent;
`;
export const GoBack = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  color: white;
  background-color: transparent;
`;
export const ContactContainer = styled.div``;

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
