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

  @media only screen and (max-width: 1020px) {
    width:100%;
  }
`;
const RowDiv2 = styled.div`
  background-color: transparent;
  height: 20vh;
  width: 80%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 3vh;

  @media only screen and (max-width: 1020px) {
    width:100%;
  }
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

  @media only screen and (max-width: 840px) {
    font-size: 1.2rem;
  };
  @media only screen and (max-width: 670px) {
    font-size: 1rem;
  }
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
    background-color: #ceb7ff;
    color: white;
    cursor: not-allowed;
  }
`;
const Form = styled.form`
  height: 100%;
  width: 100%;
  background: transparent;
`;

const ErrorMsg = styled.div`
  color: #ffb3b3;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  margin-left: 20%;
  margin-top: -3vh;
  margin-bottom: 2vh;
  letter-spacing: 0.5px;
  background: transparent;
  @media only screen and (max-width: 840px) {
    font-size: 1rem;
    margin-left: 10%;
  }
  @media only screen and (max-width: 670px) {
    font-size: 0.9rem;
    margin-left: 5%;
  }
`;

const Loader = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 1.2em;
  height: 1.2em;
  border: 2.5px solid #ceb7ff;
  border-top: 2.5px solid #9361ff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin-right: 10px;
  box-sizing: border-box;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ContactElement = () => {
  const [button, setButton] = useState("Send");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    if (!e.target.value.trim()) {
      setSubjectError("Subject is required.");
    } else {
      setSubjectError("");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (!e.target.value.trim()) {
      setMessageError("Content is required.");
    } else {
      setMessageError("");
    }
  };

  const sendEmail = (email, subject, message) => {
    setLoading(true);
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
          setLoading(false);
        },
        (err) => {
          setButton("Send");
          setLoading(false);
          console.error("Failed to send email. Error: ", err);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!subject.trim()) {
      setSubjectError("Subject is required.");
      valid = false;
    } else {
      setSubjectError("");
    }
    if (!message.trim()) {
      setMessageError("Content is required.");
      valid = false;
    } else {
      setMessageError("");
    }
    if (!valid) return;
    sendEmail(email, subject, message);
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <RowDiv>
          <Label htmlFor="email">EMAIL: </Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email id"
            value={email}
            onChange={handleEmailChange}
            style={emailError ? { borderBottom: '2px solid #ffb3b3' } : {}}
          />
        </RowDiv>
        {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
        <RowDiv>
          <Label htmlFor="subject">SUBJECT: </Label>
          <Input
            type="text"
            name="subject"
            placeholder="Enter the subject"
            value={subject}
            onChange={handleSubjectChange}
            style={subjectError ? { borderBottom: '2px solid #ffb3b3' } : {}}
          />
        </RowDiv>
        {subjectError && <ErrorMsg>{subjectError}</ErrorMsg>}
        <RowDiv2>
          <Label htmlFor="content">CONTENT: </Label>
          <TextBox
            type="text"
            name="content"
            placeholder="Enter the content and details"
            value={message}
            onChange={handleMessageChange}
            style={messageError ? { border: '2px solid #ffb3b3' } : {}}
          />
        </RowDiv2>
        {messageError && <ErrorMsg>{messageError}</ErrorMsg>}
        <RowDiv>
          <BTN type="submit" disabled={button === "Sent" || loading ? true : false}>
            {loading && <Loader />}
            {button === "Sent" ? (
              <TiTick style={{ background: "transparent" }} size={20} />
            ) : (
              ""
            )}
            {button}
          </BTN>
        </RowDiv>
      </Form>
    </Container>
  );
};
export default ContactElement;
