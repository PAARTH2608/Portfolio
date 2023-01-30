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
export const InformationContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
export const ContentContainer = styled.div`
  height: 60vh;
  width: 60%;
  background-color: transparent;
  z-index: 5;
  padding: 2%;
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
