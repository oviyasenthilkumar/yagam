import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SacredGlimpses = () => {
  const images = [
    { src: "./assets/jpg/glip-1.jpg", alt: "Sacred Glimpse 1" },
    { src: "./assets/jpg/glip-2.jpg", alt: "Sacred Glimpse 2" },
    { src: "./assets/jpg/glip-5.jpg", alt: "Sacred Glimpse 3" },
    { src: "./assets/jpg/glip-6.jpg", alt: "Sacred Glimpse 4" },
    { src: "./assets/jpg/glip-3.jpg", alt: "Sacred Glimpse 3" },
    { src: "./assets/jpg/glip-4.jpg", alt: "Sacred Glimpse 4" },
    { src: "./assets/jpg/glip-7.jpg", alt: "Sacred Glimpse 3" },
    { src: "./assets/jpg/glip-8.jpg", alt: "Sacred Glimpse 4" },
  ];

  return (
    <div className="bg-[#ECE5DF] py-10 px-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#411E22] font-raleway mb-4">
          Sacred Glimpses
        </h2>
        <p className="text-[#411E22] font-raleway max-w-2xl mx-auto">
          Discover the essence of the Poundarika Maha Soma Yagam through these
          powerful images, showcasing the rituals, chants, and spiritual
          devotion of this ancient tradition.
        </p>
      </div>

      <div className="mt-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-[25px] overflow-hidden shadow-lg">
                <div className="w-full h-60">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SacredGlimpses;
