import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";
import ChatBotScreen from "./components/ChatBot/ChatBotScreen";
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazona</Link>
          <Link to="/contact">Contact Us</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/chatbot" element={<ChatBotScreen />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
