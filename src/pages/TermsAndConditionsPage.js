import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-pink-100 text-pink-900 h-screen flex flex-col">
      <header className="p-4 text-4xl bg-pink-200">
        Terms and Conditions
      </header>
      <section className="p-4 bg-pink-300 flex-grow overflow-y-auto">
        <h2 className="text-2xl text-pink-600">Acceptance of Terms</h2>
        <p className="text-pink-900">
          By accessing Barbie Design Studio, you agree to comply with these Terms and Conditions. Please read them carefully before using our services.
        </p>
        <h2 className="text-2xl text-pink-600 mt-4">Use of Services</h2>
        <ul className="list-disc list-inside text-pink-900">
          <li>Proper use of services and content</li>
          <li>Restrictions and limitations</li>
          <li>Other guidelines and rules</li>
        </ul>
        <h2 className="text-2xl text-pink-600 mt-4">Privacy and Security</h2>
        <p className="text-pink-900">
          We respect your privacy. Review our Privacy Policy for information on how we collect and use personal data.
        </p>
        <a href="#full-terms" className="text-blue-500 underline">Read Full Terms and Conditions</a>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
