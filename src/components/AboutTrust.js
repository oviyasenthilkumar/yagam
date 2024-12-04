import React from "react";
import { useMediaQuery } from "react-responsive"; 

const AboutTrust = () => {

        const isDesktopView = useMediaQuery({ maxWidth: "500px" });

  return (
    <div className="relative bg-[#ECE5DF] py-16">
      {/* Background Image */}
      <div
        className="relative max-w-7xl mx-auto bg-no-repeat rounded-lg"
        style={{
          backgroundImage: isDesktopView
            ? "url('/assets/png/AboutTrustMob.png')" // Mobile background image
            : "url('/assets/png/aboutTrust.png')", // Desktop background image
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8 py-12 lg:pt-32 lg:pb-12	font-raleway">
          {/* Left Section - Text Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-raleway font-raleway">
              About Trust
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-6 leading-relaxed font-raleway">
              Trust Name - AGNIHOTRA MAHAAGNICHITVEDA SROWTHA YAGA SAMRAKSHANA
              PUBLIC CHARITABLE TRUST
            </p>
            <hr className="border-t border-white my-6 opacity-50" />
            <h3 className="text-lg lg:text-xl font-semibold mb-4 font-raleway">
              FOR ENQUIRY:
            </h3>
            <div className="space-y-6">
              <div className="flex">
                <div>
                  <p className=" text-sm sm:text-base font-raleway">
                    D. Sada Siva Ghanapathi Somayaji
                  </p>
                  <p className="flex items-center gap-2 text-sm sm:text-base pt-2 font-raleway">
                    <img src="/assets/png/call.png" /> <span>9440366904</span>
                  </p>
                </div>
                <div>
                  <p className=" text-sm sm:text-base pl-10 font-raleway">
                    D. Laxmi Narasimha Somayaji
                  </p>
                  <p className="flex items-center gap-2 text-sm sm:text-base pl-10 pt-2 font-raleway">
                    <img src="/assets/png/call.png" /> <span>9849132500</span>
                  </p>
                </div>
              </div>
              <div>
                <p className=" text-sm sm:text-base">D. Kasi Viswanath Sarma</p>
                <p className="flex items-center gap-2 text-sm sm:text-base pt-2 font-raleway">
                  <img src="/assets/png/call.png" /> <span>9849289517</span>
                </p>
                <p className="flex items-center gap-2 text-sm sm:text-base pt-2 font-raleway">
                  <img src="/assets/svg/location_yellow.svg" />
                  <span>
                    D.No.27-27-8, Maddulapallivari Street, Governerpet,
                    VIJAYAWADA-520002.
                  </span>
                </p>
              </div>
            </div>
            <button className="mt-8 px-7 py-2 bg-[#D3A243] text-[#fff] font-semibold rounded-[25px] shadow hover:bg-yellow-300 font-raleway">
              DONATE NOW
            </button>
          </div>
          {/* Right Section - Image */}
          <div className="flex justify-center lg:justify-end  sm:pb-17 md:pb-20">
            <img
              src="/assets/png/about-img.png"
              alt="Trust Members"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-lg  z-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrust;
