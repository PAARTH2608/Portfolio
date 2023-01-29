import styled from "styled-components";
import Button from "../submitButton";

const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RowDiv = styled.div`
  background-color: transparent;
  height: 5vh;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
`;
const RowDiv2 = styled.div`
  background-color: transparent;
  height: 20vh;
  width: 80%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 3vh;
`;
const Label = styled.label`
  background-color: transparent;
  font-family: "Bebas Neue", sans-serif;
  color: white;
  width: 15%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 5%;
  font-size: 1.5rem;
`;
const Input = styled.input`
  background-color: transparent;
  font-family: "Bebas Neue", sans-serif;
  height: 100%;
  width: 100%;
  border: none;
  background-color: #ceb7ff;
  opacity: 0.5;
  border-radius: 3px;
  outline: none;
  padding: 2%;
  font-size: 1.2rem;
  text-align: left;
  &::placeholder {
    display: flex;
    color: white;
  }
`;
const TextBox = styled.textarea`
  background-color: transparent;
  font-family: "Bebas Neue", sans-serif;
  height: 100%;
  width: 100%;
  border: none;
  background-color: #ceb7ff;
  opacity: 0.4;
  border-radius: 3px;
  outline: none;
  padding: 1%;
  font-size: 1.2rem;
  text-align: left;
  &::placeholder {
    display: flex;
    color: white;
  }
`;
const ContactElement = () => {
  return (
    <Container>
      <RowDiv>
        <Label htmlFor="email">EMAIL : </Label>
        <Input type="email" name="email" placeholder="Enter your email id" />
      </RowDiv>
      <RowDiv>
        <Label htmlFor="subject">SUBJECT: </Label>
        <Input type="text" name="subject" placeholder="Enter the subject" />
      </RowDiv>
      <RowDiv2>
        <Label htmlFor="content">CONTENT: </Label>
        <TextBox
          type="text"
          name="content"
          placeholder="Enter the content and details"
        />
      </RowDiv2>
      <RowDiv>
        <Button />
      </RowDiv>
    </Container>
  );
};
export default ContactElement;
