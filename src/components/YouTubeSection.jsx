import React from "react";

const YouTubeSection = () => {
  return (
    <section id="youtube" className="relative ">
      {/* Background Images */}
      <div className="absolute top-0 right-0 z-10 opacity-50">
        <img src="./assets/png/left.png" alt="kolam" className="w-full" />
      </div>
      <div className="absolute bottom-0 left-0 z-10 opacity-50">
        <img src="./assets/png/right.png" alt="kolam" className="w-full" />
      </div>

      {/* Content Section */}
      <div className="bg-[#ECE5DF] flex flex-col items-center justify-center md:px-4 relative py-[3rem]  z-20">
        {/* YouTube Channel Embed */}
        <div className="w-full max-w-3xl aspect-w-16 aspect-h-9 p-4 md:p-0 md:aspect-auto md:w-[600px] md:h-[400px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/fHmokmUIuT8?si=nLdkkWtaWn7L5KcB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Channel Subscription Button */}
        <a
          href="https://www.youtube.com/channel/UCgT8CQ7G40DmkZKzUdYHe1g?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-red-600 text-white px-4 py-2 text-sm rounded-md md:px-6 md:py-2 md:rounded-lg md:text-lg font-medium hover:bg-red-700 transition duration-200"
        >
          Subscribe to Our Channel
        </a>
      </div>
    </section>
  );
};

export default YouTubeSection;
