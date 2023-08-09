import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-pink-100 text-pink-900 h-screen flex flex-col">
      <header className="p-4 text-4xl bg-pink-200">
        Privacy Policy
      </header>
      <section className="p-4 bg-pink-300 flex-grow overflow-y-auto">
        <h2 className="text-2xl text-pink-600">Introduction</h2>
        <p className="text-pink-900">
          At Barbie Design Studio, we value your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and disclose your data.
        </p>
        <h2 className="text-2xl text-pink-600 mt-4">What Information We Collect</h2>
        <ul className="list-disc list-inside text-pink-900">
          <li>Personal details like name, email address, etc.</li>
          <li>Usage information and browsing history</li>
          <li>Other information as described here...</li>
        </ul>
        <h2 className="text-2xl text-pink-600 mt-4">How We Use Your Information</h2>
        <p className="text-pink-900">
          We use your information to provide our services, improve user experience, and more. For detailed information, please continue reading.
        </p>
        <a href="#full-privacy-policy" className="text-blue-500 underline">Read Full Privacy Policy</a>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
