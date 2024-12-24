import React from "react";
import { useNavigate } from "react-router-dom";

const DonateButton = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate("/payment");
  };

  return (
    <button
      type="button"
      className="font-raleway pr-5 text-white bg-[#D3A243] px-4 py-2 sm:px-5 rounded-full text-sm sm:text-base lg:text-lg transition-transform duration-300 hover:scale-105"
      onClick={handleDonateClick}
    >
      Donate Now
    </button>
  );
};

export default DonateButton;
