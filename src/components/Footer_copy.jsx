import React from "react";
import { useMediaQuery } from "react-responsive";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterCopy = ({className}) => {
  const isMobile = useMediaQuery({ maxWidth: "500px" });

  return (
    <footer
      className={`text-white pb-4 w-full h-auto absolute left-0 top-0 bg-no-repeat bg-[#ECE5DF] z-10 ${className}`}
      style={{
        backgroundImage: isMobile
          ? "url(/assets/png/Footer-design-mob.png)"
          : "url(/assets/png/footer-design-old-v3.png)",
        backgroundSize: isMobile ? "contain " : " ",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container mx-auto px-3 ">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-5 lg:gap-10">
          {/* First Column */}
          <div>
            <div className=" w-[73%] mb-6 mt-2 md:mt-8">
              <img
                src="./assets/png/footer-logo.png"
                alt="Logo"
                className="w-full h-16"
              />
            </div>
            <p className="text-[#FFFFFF] text-lg">
              The Poundarika Maha Soma Yagam is a sacred Vedic ritual for peace,
              prosperity, and divine blessings. It preserves ancient traditions
              through powerful Vedic chants.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[F3CD39]"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[F3CD39]"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[F3CD39]"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Second Column */}
          {/* <div className="md:pl-[3rem]">
            <h3 className="text-xl font-semibold text-[#F3CD39]  mb-4 mt-2 md:mt-8">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#letter" className="hover:text-gray-400">
                  Invitation
                </a>
              </li>
              <li>
                <a href="#letter" className="hover:text-gray-400">
                  Letter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Donate
                </a>
              </li>
            </ul>
          </div> */}
          {/* Third Column */}
          <div className="md:pl-[3rem]">
            <h3 className="text-xl font-semibold text-[#F3CD39]  mb-4 mt-2 md:mt-8">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-400">
                  <Link to="/terms">Terms & Condition</Link>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <Link to="/return">Refunds and cancellation</Link>
                </a>
              </li>
              
              <li>
                <a href="#" className="hover:text-gray-400">
                  <Link to="/contact">Contact Us</Link>
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7650.523276030708!2d80.62248319489895!3d16.512883773292728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sD.No.27-27-8%2C%20Maddulapallivari%20Street%2C%20Governerpet%2C%20VIJAYAWADA-520002.!5e0!3m2!1sen!2sin!4v1733296608472!5m2!1sen!2sin"
              width="100%"
              className="border-0 h-[150px] sm:h-[250px] md:h-[250px] lg:h-[250px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-5 border-t border-[#aaa] pt-3 text-center text-sm">
          <p>Powered by GoZen</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCopy;
