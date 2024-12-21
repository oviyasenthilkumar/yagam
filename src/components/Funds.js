import React from "react";
import Footer from "./Footer";

const FundsSection = () => {
  return (
    <section id="funds" className="bg-[#ECE5DF] py-16 px-6 relative ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-[95%] md:w-[85%] z-20 relative">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#411E22] mb-4 sm:mb-6">
          Funds
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Column */}
          <div>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-4 text-[#2A2A2A] text-sm sm:text-base">
              <li>
                Yagya Dravyam (Materials) like firewood, ghee, fruits, etc.
              </li>
              <li>
                Bronze, brass, wooden, and clay materials used for various
                purposes.
              </li>
              <li>
                Construction and maintenance of the venue (Yagashala, tents,
                barricades, etc).
              </li>
              <li>Food and prasadam.</li>
              <li>
                Cultural events and Upanyasams. We request all dharmics to
                extend their contributions towards performing this Mahayaga and
                seek the blessings of Yagneshwara.
              </li>
            </ul>
            <p className="text-[#2A2A2A] mt-4 sm:mt-6 text-sm sm:text-base">
              *** All are welcome to attend the Mahayagam in person ***
              <br />
              Jaya Jaya Shankara! Hara Hara Shankara!
            </p>
            <button className="bg-[#8D2732] text-white px-6 sm:px-8 py-2 sm:py-3 mt-4 sm:mt-6 rounded-full shadow hover:bg-[#741f29] transition font-raleway text-sm sm:text-base">
              Donate Now
            </button>
          </div>

          {/* Right Column */}
          <div
            className="bg-cover bg-center w-full h-48 sm:h-64 md:h-80 lg:h-full rounded-[15px] sm:rounded-[25px]"
            style={{ backgroundImage: "url(/assets/jpg/funds-img.jpg)" }}
          ></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FundsSection;

