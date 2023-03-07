import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";
import ChatBotScreen from "./components/ChatBot/ChatBotScreen";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <NavBar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>Soul-Merch</NavBar.Brand>
              </LinkContainer>
            </Container>
          </NavBar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/chatbot" element={<ChatBotScreen />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All right reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
