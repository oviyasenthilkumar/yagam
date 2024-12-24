
import React, { useState } from "react";
import Header from "./Header";
import FooterCopy from "./Footer_copy";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
      const navigate = useNavigate();
  const [isIndianCitizen, setIsIndianCitizen] = useState(null);

  const handleCitizenCheck = (event) => {
    setIsIndianCitizen(event.target.value === "yes");
  };

  const handleProceed = (event) => {
    event.preventDefault();
    if (isIndianCitizen) {
      window.open("https://rzp.io/l/yagam", "_blank");
    }
  };

  return (
    <>
      <Header />
      <section className="bg-[#ECE5DF] px-6 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-[95%] md:w-[85%] relative z-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#411E22] mb-8 text-center">
            Donate
          </h2>
          <p className="mb-6 text-gray-700 text-center">
            Kindly fill the following details to proceed further:
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Are you a resident of India?
            </h3>
            <div className="flex items-center space-x-6 mb-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="citizen"
                  value="yes"
                  onChange={handleCitizenCheck}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="citizen"
                  value="no"
                  onChange={handleCitizenCheck}
                  className="mr-2"
                />
                No
              </label>
            </div>

            {isIndianCitizen === false && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
                <p className="mb-4">Only Indian residents can donate.</p>
                <div>
                  <p className="font-semibold text-[#411E22] mb-2">
                    Contact Us:
                  </p>
                  <p className="text-gray-700">
                    <strong>D. Sada Siva Ghanapathi Somayaji:</strong>{" "}
                    <a href="tel:+919440366904" className="text-blue-600">
                      +91 9440366904
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>D. Laxmi Narasimha Somayaji:</strong>{" "}
                    <a href="tel:+919849132500" className="text-blue-600">
                      +91 9849132500
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>D. Kasi Viswanath Sarma:</strong>{" "}
                    <a href="tel:+919849289517" className="text-blue-600">
                      +91 9849289517
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:trayeeveda@gmail.com"
                      className="text-blue-600"
                    >
                      trayeeveda@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                onClick={() => navigate("/")}
              >
                Back to home
              </button>
              {isIndianCitizen && (
                <button
                  type="button"
                  className="px-6 py-2 bg-[#D3A243] text-white rounded-lg hover:bg-[#c49a3e]"
                  onClick={handleProceed}
                >
                  Proceed
                </button>
              )}
            </div>
          </div>
        </div>
        <FooterCopy className="mt-12 pt-[50rem] md:pt-[40rem] lg:pt-[41rem]" />
      </section>
    </>
  );
};

export default PaymentPage;

