import React from "react";

const InvitationLetter = () => {
  return (
    <section id="letter" className="relative">
      {/* Background Images */}
      <div className="absolute top-0 right-0 z-10 opacity-50">
        <img src="./assets/png/left.png" alt="kolam" className="w-full" />
      </div>
      <div className="absolute bottom-0 left-0 z-10 opacity-50">
        <img src="./assets/png/right.png" alt="kolam" className="w-full" />
      </div>

      <div className="bg-[#ECE5DF] flex flex-col items-center justify-center md:px-4 relative py-[3rem]">
        {/* Container for Invitation and Letter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-[80%] md:w-[75%] lg:w-[70%] xl:w-[62%] h-[70%]">
          {/* Invitation Section */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center z-20">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 font-raleway">
              INVITATION
            </h2>
            <img
              src="/assets/png/invitation.png"
              alt="Invitation"
              className="h-auto object-cover rounded-md mb-4"
            />
            <a
              href="/assets/pdf/invitation.pdf" // Link to your file
              download="Invitation" // File name for download
              className="flex items-center justify-center bg-transparent text-[#8D2732] px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-[25px] font-semibold shadow transition duration-200 ease-in-out font-raleway text-xs sm:text-sm md:text-base lg:text-lg hover:bg-[#8D2732] hover:text-white"
            >
              <img
                src="./assets/png/Icon.png"
                alt="download"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2"
              />
              <span className="whitespace-nowrap">DOWNLOAD INVITATION</span>
            </a>
          </div>

          {/* Letter Section */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-lg transition z-20 relative">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              LETTER
            </h2>
            <img
              src="/assets/png/letter.png"
              alt="Letter"
              className="h-auto object-cover rounded-md mb-4"
            />
            <a
              href="/assets/pdf/letter.pdf" // Link to your file
              download="Letter" // File name for download
              className="flex items-center justify-center bg-transparent text-[#8D2732] px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-[25px] font-semibold shadow transition duration-200 ease-in-out font-raleway text-xs sm:text-sm md:text-base lg:text-lg hover:bg-[#8D2732] hover:text-white"
            >
              <img
                src="./assets/png/Icon.png"
                alt="download"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2"
              />
              <span className="whitespace-nowrap">DOWNLOAD LETTER</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationLetter;
