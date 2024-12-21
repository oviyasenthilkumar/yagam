import React from 'react'
import Home from "../components/Home";
import AboutMahaYagam from "../components/About";
import Header from "../components/Header";
import AboutTrust from "../components/AboutTrust";
import InvitationLetter from "../components/Letter";
import FundsSection from "../components/Funds";
import SacredGlimpses from "../components/Carousel";

const HomePg = () => {
  return (
    <div>
      <Header />
      <Home />
      <AboutTrust />
      <SacredGlimpses />
      <InvitationLetter />
      <FundsSection />
    </div>
  );
}

export default HomePg
