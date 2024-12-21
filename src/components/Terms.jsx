import React from "react";
import FooterCopy from "./Footer_copy";

const Terms = () => {
  return (
    <section className="bg-[#ECE5DF] px-6 py-12">
      <div className=" relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 w-[95%] md:w-[85%]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#411E22] mb-8">
          Terms and Conditions for Payment
        </h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Thank you for choosing to support our nonprofit organization. By
          making a payment or donation through our website, you agree to the
          following terms and conditions:
        </p>

        <div className="relative z-20">
          <dl className="space-y-6">
            <div>
              <dt className="font-semibold text-[#411E22] mb-2">
                Purpose of Payment
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                All payments made through this platform are intended to support
                the mission and activities of AGNIHOTRA MAHAAGNICHITVEDA SROWTHA
                YAGA SAMRAKSHANA PUBLIC CHARITABLE TRUST. These payments may
                include donations, membership fees, event registrations, or
                other contributions as specified.
              </dd>
            </div>

            <div className="relative z-20">
              <dt className="font-semibold text-[#411E22] mb-2">
                Payment Methods
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                We accept payments through secure online payment gateways. By
                using this service, you agree to comply with the terms and
                conditions of the payment provider.
              </dd>
            </div>

            <div className="relative z-20">
              <dt className="font-semibold text-[#411E22] mb-2">
                Refund Policy
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                Donations: Donations are typically non-refundable. However, if
                an error occurs during the transaction, please contact us within
                7 days at [contact email/+91-9440366904]. Event Registrations or
                Membership Fees: Refunds for event cancellations or membership
                changes will be handled on a case-by-case basis.
              </dd>
            </div>

            <div className="relative z-20">
              <dt className="font-semibold text-[#411E22] mb-2">
                Tax Deductibility
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                If your payment qualifies as a donation, you may be eligible for
                a tax deduction as permitted by law. A receipt will be provided
                for your records. Please consult your tax advisor for more
                information.
              </dd>
            </div>

            <div className="relative z-20">
              <dt className="font-semibold text-[#411E22] mb-2">Privacy</dt>
              <dd className="text-gray-700 leading-relaxed">
                Your personal and payment information will be handled securely
                and used solely for processing your payment. We do not share
                your information with third parties except as necessary to
                process your transaction. For more details, refer to our
                [Privacy Policy link].
              </dd>
            </div>

            <div className="relative z-20">
              <dt className="font-semibold text-[#411E22] mb-2">
                Disputes and Liability
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                We strive to ensure secure and accurate transactions. However,
                we are not responsible for any technical issues, unauthorized
                transactions, or errors caused by third-party payment
                processors. If you experience any issues, please notify us
                immediately.
              </dd>
            </div>

            <div className="relative z-20">
              <dt className="font-semibold text-[#411E22] mb-2">
                Changes to Terms
              </dt>
              <dd className="text-gray-700 leading-relaxed">
                We reserve the right to update these terms and conditions at any
                time. Any changes will be posted on this page and will take
                effect immediately.
              </dd>
            </div>

            <div className="relative z-20">
              <dt className="font-semibold text-[#411E22] mb-2">Contact Us</dt>
              <dd className="text-gray-700 leading-relaxed">
                If you have any questions about these terms or encounter issues
                during payment, please contact us at:
                <br />
                Email: [email address]
                <br />
                Phone: +91 9440366904
                <br />
                Address: D.No.27-27-8, Maddulapallivari Street, Governerpet,
                VIJAYAWADA-520002.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 text-gray-700 leading-relaxed">
          By proceeding with the payment, you acknowledge that you have read,
          understood, and agreed to these terms and conditions. Thank you for
          your support!
        </div>
      </div>
      <FooterCopy className="mt-12 pt-[83rem]" />
    </section>
  );
};

export default Terms;
