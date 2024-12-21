// ContactUs.js
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import FooterCopy from "./Footer_copy";

const ContactUs = () => {
  return (
    <>
      <Header />

      <section className="bg-[#ECE5DF] px-6 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-[95%] md:w-[85%] relative z-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#411E22] mb-8">
            Contact Us
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700">
            We value your feedback and inquiries. Please use the following
            contact details to reach us:
          </p>

          <dl className="space-y-6">
            <div>
              <dt className="font-semibold text-[#411E22] mb-2">For Enquiry</dt>
              <dd className="text-gray-700 leading-relaxed">
                <strong>D. Sada Siva Ghanapathi Somayaji : </strong>
                <a href="tel:+919440366904">+91 9440366904</a>
              </dd>
              <dd className="text-gray-700 leading-relaxed">
                <strong>D. Laxmi Narasimha Somayaji : </strong>
                <a href="tel:+919849132500">+91 9849132500</a>
              </dd>
              <dd className="text-gray-700 leading-relaxed">
                <strong>D. Kasi Viswanath Sarma : </strong>
                <a href="tel:+919849289517">+91 9849289517</a>
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-[#411E22] mb-2">Address</dt>
              <dd className="text-gray-700 leading-relaxed">
                <a
                  href="https://www.google.com/maps/search/?q=D.No.27-27-8,+Maddulapallivari+Street,+Governerpet,+VIJAYAWADA-520002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  D.No.27-27-8, Maddulapallivari Street, Governerpet,
                  <br />
                  VIJAYAWADA-520002.
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <FooterCopy className="mt-12  pt-[47rem] md:pt-[40rem] lg:pt-[38rem]" />
      </section>
    </>
  );
};

export default ContactUs;
