import React from "react";

const AboutMahaYagam = () => {
  return (
    <div className=" py-12 relative pt-[6rem]">
      <div className="absolute right-0 z-0 opacity-50">
        <img src="/assets/png/left.png" alt="left flower" />
      </div>
      <div className="absolute left-0 bottom-0 z-0 opacity-50">
        <img src="/assets/png/right.png" alt="right flower" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-6">
        {/* Title Section */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#411E22] text-center relative font-raleway z-1">
          Poundarika Mahayagam: A Sacred Vedic Ritual
        </h1>

        {/* Description Section */}
        <p className="mt-6 text-gray-800 text-[1rem] sm:text-base md:text-lg leading-relaxed font-raleway font-medium text-center relative z-1">
          The Poundarika Mahayagam, a rare and powerful Vedic ritual, is being
          performed with blessings from the Kanchi Kamakoti Guru Parampara under
          the guidance of Sri Shankara Vijayendra Saraswati Mahaswamigal. Led by
          Sri Dendukuri Brahmasri Lakshmi Narasimha Somayaaji, this 45-day yagna
          chants all three Vedas—Rig, Yajur, and Sama—for universal prosperity.
        </p>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10  relative z-1">
          {/* Card 1 */}
          <div className="flex justify-center items-center border border-[#8D2732] rounded-xl p-4 font-semibold hover:shadow-md transition-shadow relative">
            <img
              src="./assets/png/left.png"
              alt="kolam"
              className="absolute top-0 right-0 md:top-1 md:w-[6%] lg:w-[15%] hidden md:block"
            />
            <span className="text-center text-xl sm:text-lg text-[#000] font-raleway">
              Vastram (Clothing)
            </span>
          </div>

          {/* Card 2 */}
          <div className="flex justify-center items-center border border-[#8D2732] rounded-xl p-4 font-semibold hover:shadow-md transition-shadow relative">
            <img
              src="./assets/png/right.png"
              alt="kolam"
              className="absolute top-0 left-0 md:top-1 md:w-[6%] lg:w-[15%] hidden md:block"
            />
            <span className="text-center text-xl sm:text-lg  text-[#000] font-raleway">
              Food
            </span>
          </div>

          {/* Card 3 */}
          <div className="flex justify-center items-center border border-[#8D2732] rounded-xl p-4 font-semibold hover:shadow-md transition-shadow relative">
            <img
              src="./assets/png/left.png"
              alt="kolam"
              className="absolute top-0 right-0 md:top-1 md:w-[6%] lg:w-[15%] hidden md:block"
            />
            <span className="text-center text-xl sm:text-lg  text-[#000] font-raleway">
              Sleep (not allowed to lie down)
            </span>
          </div>

          {/* Card 4 */}
          <div className="flex justify-center items-center border border-[#8D2732] rounded-xl p-4 font-semibold hover:shadow-md transition-shadow relative">
            <img
              src="./assets/png/right.png"
              alt="kolam"
              className="absolute top-0 left-0 md:top-1 md:w-[6%] lg:w-[15%] hidden md:block "
            />
            <span className="text-center text-xl sm:text-lg text-[#000] font-raleway">
              Mantra Chanting methods
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMahaYagam;
