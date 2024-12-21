// import React from 'react'


// const App = () => {
//   return (
//     <>
      // <Header />
      // <Home />
      // <AboutTrust />
      // <SacredGlimpses />
      // <InvitationLetter />
      // <FundsSection />
      // {/* <Footer /> */}
//     </>
//   );
// };




// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "./Pages/T&C"; 
import Home from "./Pages/Home"
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./components/ContactUs";
import ReturnAndCancellation from "./components/ReturnAndCancellation";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop/>
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
          <Route path="/return" element={<ReturnAndCancellation/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
