import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function ContactUsScreen() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>ContactUs</h1>
        <LinkContainer to="/chatbot">
          <Link
            className="nav-link"
            style={{
              color: "black",
              textDecoration: "none",
              display: "inline-block",
              padding: "8px 16px",
              backgroundColor: "#ebebeb",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            }}
          >
            <h3 style={{ color: "black", textDecoration: "none" }}>
              Talk with the bot
            </h3>
          </Link>
        </LinkContainer>
      </div>

      <div>
        <Row>
          <Col className="text-center">
            <ul className="list-unstyled d-flex justify-content-between">
              <li>
                <FaMapMarkerAlt className="fa-2x" />
                <p>Dehradun, 248001, Uttarakhand, India</p>
              </li>
              <li>
                <FaPhone className="mt-4 fa-2x" />
                <p>+ 2387876787</p>
              </li>
              <li>
                <FaEnvelope className="mt-4 fa-2x" />
                <p>contact@majarproject.com</p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactUsScreen;
