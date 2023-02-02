import { useState } from "react";
import emailjs from "emailjs-com";
import { TiTick } from "react-icons/ti";
import styled from "styled-components";

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
  border-bottom: 2px solid #ceb7ff;
  border-radius: 3px;
  outline: none;
  padding: 2%;
  font-size: 1.2rem;
  text-align: left;
  color: white;
  &::placeholder {
    display: flex;
    color: white;
    opacity: 0.6;
  }
`;
const TextBox = styled.textarea`
  background-color: transparent;
  font-family: "Bebas Neue", sans-serif;
  height: 100%;
  width: 100%;
  border: 2px solid #ceb7ff;
  border-radius: 3px;
  outline: none;
  padding: 1%;
  font-size: 1.2rem;
  text-align: left;
  color: white;
  &::placeholder {
    display: flex;
    color: white;
    opacity: 0.4;
  }
`;
const BTN = styled.button`
  background-color: #9361ff;
  outline: none;
  border: none;
  height: 5vh;
  width: 82%;
  margin-left: 18%;
  color: white;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.3rem;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #CEB7FF;
    color: white;
    cursor: not-allowed;
  }
`;
const Form = styled.form`
  height: 100%;
  width: 100%;
  background: transparent;
`;
const ContactElement = () => {
  const [button, setButton] = useState("Send");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (email, subject, message) => {
    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        {
          to_email: email,
          subject: subject,
          message: message,
        },
        process.env.USER_ID
      )
      .then(
        (response) => {
          setButton("Sent");
        },
        (err) => {
          console.error("Failed to send email. Error: ", err);
        }
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(email, subject, message);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <RowDiv>
          <Label htmlFor="email">EMAIL : </Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </RowDiv>
        <RowDiv>
          <Label htmlFor="subject">SUBJECT: </Label>
          <Input
            type="text"
            name="subject"
            placeholder="Enter the subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </RowDiv>
        <RowDiv2>
          <Label htmlFor="content">CONTENT: </Label>
          <TextBox
            type="text"
            name="content"
            placeholder="Enter the content and details"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </RowDiv2>
        <RowDiv>
          <BTN type="submit" disabled={button === "Sent" ? true : false}>
            {button === "Sent" ? (
              <TiTick style={{ background: "transparent" }} size={20} />
            ) : (
              ""
            )}
            {button}
          </BTN>
          ;
        </RowDiv>
      </Form>
    </Container>
  );
};
export default ContactElement;
