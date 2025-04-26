import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-8">
          Terms & Conditions
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Last updated: <span className="font-semibold">[Insert Date]</span>
        </p>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1. Introduction</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Welcome to <span className="font-semibold">AKAFTA</span>. By using our platform, you agree to comply with these Terms and Conditions. Please read them carefully before proceeding.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">2. User Accounts</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            - Users must provide accurate registration details.<br/>
            - You are responsible for safeguarding your account credentials.<br/>
            - Unauthorized account activity should be reported immediately.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">3. Group Savings & Wallet Transactions</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            - Users can create and participate in savings groups.<br/>
            - Deposits remain locked until the agreed withdrawal cycle.<br/>
            - Transactions must be verified before processing.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">4. Payments & Transactions</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            - Transactions must comply with all applicable laws.<br/>
            - We employ secure encryption, but we are not liable for external breaches.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">5. Termination</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            We reserve the right to suspend or terminate accounts that violate our Terms without prior notice.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">6. Limitation of Liability</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            - We are not responsible for indirect losses incurred through platform usage.<br/>
            - Our maximum liability shall not exceed the amount paid for our services.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">7. Changes to Terms</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            We may update these terms at any time. Continued use of our platform after updates constitutes acceptance of the revised terms.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">8. Contact Us</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            If you have any questions, please contact us at <span className="font-semibold text-indigo-600 dark:text-indigo-400">support@[yourplatform].com</span>.
          </p>
        </div>

        <div className="text-center mt-8">
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-700 transition-all">
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
