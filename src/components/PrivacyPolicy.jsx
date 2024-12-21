// PrivacyPolicy.js
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import FooterCopy from "./Footer_copy";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      <section className="bg-[#ECE5DF] px-6 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-[95%] md:w-[85%] relative z-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#411E22] mb-8">
            Privacy Policy
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700">
            At AGNIHOTRA MAHAAGNICHITVEDA SROWTHA YAGA SAMRAKSHANA PUBLIC
            CHARITABLE TRUST, we are committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and safeguard your
            personal information when you interact with our website.
          </p>

          <dl className="space-y-4">
            <div>
              <dt className="font-semibold text-[#411E22] mb-2">
                Information We Collect
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                - Personal information: Name, email, phone number, etc.
                <br />- Payment details collected securely through payment
                processors.
                <br />- Cookies and analytics for website improvement.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-[#411E22] mb-2">
                How We Use Your Information
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                - To process payments and provide receipts.
                <br />- To respond to inquiries and improve your experience.
                <br />- To send updates about our activities (if opted in).
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-[#411E22] mb-2">
                Data Security
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                We use industry-standard security measures to protect your
                information. However, no system is 100% secure.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-[#411E22] mb-2">Your Rights</dt>
              <dd className="text-gray-700 leading-relaxed">
                You can access, update, or request the deletion of your data at
                any time. Contact us for assistance.
              </dd>
            </div>
          </dl>

          <div className="mt-8 text-gray-700 leading-relaxed">
            For more information, contact us at:
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
          </div>
        </div>
        <FooterCopy className="mt-12  pt-[77rem] md:pt-[50rem] lg:pt-[53rem]" />
      </section>
    </>
  );
};

export default PrivacyPolicy;
