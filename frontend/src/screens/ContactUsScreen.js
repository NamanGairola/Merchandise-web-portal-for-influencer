import { LinkContainer } from "react-router-bootstrap";

function ContactUsScreen() {
  return (
    <div>
      <h1>ContactUs</h1>
      <LinkContainer to="/chatbot">
        <h4>talk with the bot</h4>
      </LinkContainer>
    </div>
  );
}
export default ContactUsScreen;
