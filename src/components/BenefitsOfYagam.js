import React from "react";


const BenefitsOfYagam = () => {

  
  return (
    <div className="py-12 bg-[#ECE5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-6 text-center">
        {/* Title Section */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#411E22] mb-4 font-raleway">
          BENEFITS OF THE YAGAM
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 font-raleway">
          By supporting the Poundarika Maha Soma Yagam, you invite profound
          blessings into your life, including:
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center rounded-lg p-6">
            <img
              src="/assets/png/ben-3.png"
              alt="Health and Healing"
              className="h-96 object-contain mb-4"
            />
            <p className="text-gray-600 text-sm text-center font-bold font-raleway">
              Health and healing for body and mind.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center rounded-lg p-6 ">
            <img
              src="/assets/png/ben-4.png"
              alt="Prosperity"
              className="h-96 object-contain mb-4"
            />
            <p className="text-gray-600 text-sm text-center font-bold font-raleway">
              Prosperity and success in all endeavors.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center rounded-lg p-6">
            <img
              src="/assets/png/ben-2.png"
              alt="Peace"
              className="h-96 object-contain mb-4"
            />
            <p className="text-gray-600 text-sm text-center font-bold font-raleway">
              Peace within your household and spiritual growth.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="flex flex-col items-center rounded-lg p-6">
            <img
              src="/assets/png/ben-1.png"
              alt="Protection"
              className="h-96 object-contain mb-4"
            />
            <p className="text-gray-600 text-sm text-center font-bold font-raleway">
              Protection and karmic merit for you and your loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfYagam;
