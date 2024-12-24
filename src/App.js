import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "./Pages/T&C"; 
import Home from "./Pages/Home"
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./components/ContactUs";
import ReturnAndCancellation from "./components/ReturnAndCancellation";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PaymentPage from "./components/PaymentPage";

const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return" element={<ReturnAndCancellation />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
