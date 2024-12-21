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
                Donations are non-refundable. If you experience an error during
                a transaction, contact us within 7 days.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-[#411E22] mb-2">
                Event Registrations
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Refunds for cancellations will be handled on a case-by-case
                basis. Notify us at least 48 hours prior to the event.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-[#411E22] mb-2">
                Membership Fees
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Membership fees are non-refundable unless special circumstances
                apply. Contact us for more information.
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
                4
                <br />
                Provide your transaction ID and reason for the request.
              
          
          </dl>

          <div className="mt-8 text-gray-700 leading-relaxed">
            Thank you for your understanding and support.
          </div>
        </div>
        <FooterCopy className="mt-12  pt-[70rem] md:pt-[48rem] lg:pt-[45rem]" />
      </section>
    </>
  );
};

export default ReturnAndCancellation;
