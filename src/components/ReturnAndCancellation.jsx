// ReturnAndCancellation.js
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import FooterCopy from "./Footer_copy";

const ReturnAndCancellation = () => {
  return (
    <>
      <Header />

      <section className="bg-[#ECE5DF] px-6 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-[95%] md:w-[85%] relative z-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#411E22] mb-8">
            Return & Cancellation Policy
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700">
            At AGNIHOTRA MAHAAGNICHITVEDA SROWTHA YAGA SAMRAKSHANA PUBLIC
            CHARITABLE TRUST, we strive to ensure transparent and fair policies
            for all payments. Please review the following terms:
          </p>

          <dl className="space-y-6">
            <div>
              <dt className="font-semibold text-[#411E22] mb-2">Donations</dt>
              <dd className="text-gray-700 leading-relaxed">
                Donations are completely non-refundable under any circumstances.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#411E22] mb-2">
                Event Registrations
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Refunds for event registrations will be considered only under
                exceptional circumstances. Please notify us at least 48 hours
                prior to the event.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#411E22] mb-2">
                Membership Fees
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Membership fees are non-refundable and cannot be transferred to
                another person or event.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#411E22] mb-2">
                How to Request a Refund
              </dt>
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
            <br />
            Please provide your transaction ID and reason for the request.
          </dl>

          <div className="mt-8 text-gray-700 leading-relaxed">
            Thank you for your understanding and support.
          </div>
        </div>
        <FooterCopy className="mt-12 pt-[82rem] md:pt-[50rem] lg:pt-[47rem] " />
      </section>
    </>
  );
};

export default ReturnAndCancellation;
