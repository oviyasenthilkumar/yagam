import React from "react";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 w-[100%] max-w-[1920px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 z-30 bg-[#8d2732de]/90 backdrop-blur-md border-b border-white/10 py-2">
        <a href="Home.js">
          <img
            src="/assets/png/logo.png"
            alt="Logo"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto pl-5"
          />
        </a>
        <a href="">
          <button className="font-raleway pr-5 text-white bg-[#D3A243] px-4 py-2 sm:px-5 rounded-full text-sm sm:text-base lg:text-lg transition-transform duration-300 hover:scale-105">
            DONATE NOW
          </button>
        </a>
      </header>
    </>
  );
};

export default Header;
