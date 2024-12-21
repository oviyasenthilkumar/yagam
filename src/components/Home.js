import React from 'react'
import Header from './Header';
import AboutMahaYagam from './About';
import { useMediaQuery } from "react-responsive"; 
import BenefitsOfYagam from './BenefitsOfYagam';

const Home = () => {

  const isDesktop = useMediaQuery({maxWidth:"500px"});


  return (
    <section id='hero' className="bg-[#ECE5DF]">
      <div className=" w-full sm:pt-0 ">
        <div className="z-20 relative">
          {isDesktop ? (
            <>
              <img
                src="/assets/png/Hero Banner.png"
                alt="Hero Mobile"
                className="relative w-full"
              />
            </>
          ) : (
            <>
              <img
                src="/assets/png/Hero Banner Web.png"
                alt="Hero"
                className="relative w-full"
              />
            </>
          )}
        </div>
      </div>

      <div className="w-[90%] lg:w-[80%] mx-auto bg-white rounded-[25px] shadow-lg p-6 z-10 relative top-[-1rem] md:top-[-5em] lg:top-[-9em]">
        <div className="absolute top-[-4rem] xl:top-[-5rem] left-1/2 -translate-x-1/2">
          <button className="font-raleway pr-5 text-white bg-[#D3A243] px-6 py-3 sm:px-5 rounded-full text-sm sm:text-base lg:text-lg transition-transform duration-300 hover:scale-105">
            DONATE NOW
          </button>
        </div>

        <div className="grid lg:grid-cols-[55%_45%] gap-6 items-center">
          <div className="space-y-4 md:pl-[3rem] sm:pl-[1rem]">
            <div className="order-1">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight uppercase font-raleway">
                Name of Event - Poundarika Mahayagam
              </h1>
              <h3 className="text-lg lg:text-xl font-medium text-gray-600 font-raleway pt-1 pb-1">
                (TRISHAHASRAGNI YUKTA POUNDAREEKA YAGAM)
              </h3>
              <hr className="border-t-2 border-gray-300" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <img
                    src="/assets/svg/location.svg"
                    alt="Location Icon"
                    className="bg-[#BB7E3B] p-2 rounded-[25%] h-10 w-10"
                  />
                  <span className=" text-gray-800 font-raleway text-lg	">
                    PLACE
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-raleway	">
                  Sri Chadra Sekharendra Saraswati Maha swami Devasthanam,
                  Nunna, Chinna Kanchi, Vijayawada, Andhra Pradesh.
                </p>
              </div>
              <div className="flex flex-col space-y-2 order-3">
                <div className="flex items-center space-x-2">
                  <img
                    src="/assets/svg/calendar.svg"
                    alt="Calendar Icon"
                    className="bg-[#BB7E3B] p-2 rounded-[25%] h-10 w-10"
                  />
                  <span className=" text-gray-800 font-raleway text-lg">
                    DATE
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-raleway 	">
                  From 12th Feb 2025 to 15th March 2025
                </p>
              </div>
            </div>
            <div className="order-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <img
                    src="/assets/svg/user-square.svg"
                    alt="Calendar Icon"
                    className="bg-[#BB7E3B] p-2 rounded-[25%] h-10 w-10"
                  />
                  <span className=" text-gray-800 font-raleway text-lg">
                    ORGANIZER NAME
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-raleway ">
                  Ghanapathi" Brahmasri Dendukuri Sadaashiva Somayaaji Elder Son
                  of Brahmasri. Dendukuri Lakshmi Narasimha Somayaaji & The
                  Grand Son of Bahuyaji Kandatrayasrowthi Vedanidhi Brahmasri
                  Dendukuri Agnihotra Mahagnichit Yajwa
                </p>
              </div>
            </div>
            <div>
              <button className="font-raleway text-white bg-[#8D2732] px-3 py-1 sm:px-5 sm:py-3 rounded-full text-[0.9rem] sm:text-[0.9rem] lg:text-[0.8rem] transition-transform duration-300 hover:scale-105">
                DONATE NOW
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:w-[70%] mx-auto order-2 height-[20em]">
            <img
              src="/assets/png/about.png"
              alt="Event Image"
              className="rounded-[25px] w-full lg:w-[90%] h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <AboutMahaYagam />
      {/* Image Section */}
      <div className="relative mt-12 w-full p-[10px] md:p-[3rem]  lg:p-[4rem] xl:px-[14em]">
        <img
          src="/assets/png/about_abstract.png"
          alt="Maha Yagam Ceremony"
          className="w-full h-auto rounded-md  object-cover"
        />
      </div>

      <BenefitsOfYagam />
    </section>
  );
}

export default Home
