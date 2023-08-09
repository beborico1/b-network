import React from 'react';

const FAQPage = () => {
  return (
    <div className="bg-pink-100 text-pink-900 h-screen flex flex-col">
      <header className="p-4 text-4xl bg-pink-200">
        Frequently Asked Questions
      </header>
      <section className="p-4 bg-pink-300 flex-grow overflow-y-auto">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-2xl text-pink-600">How do I create an account?</h2>
          <p className="text-pink-900">You can create an account by clicking the "Sign Up" button on our homepage and following the instructions.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-2xl text-pink-600">How do I submit my designs?</h2>
          <p className="text-pink-900">Once logged in, navigate to your personal studio and use the provided tools to create and submit your designs.</p>
        </div>
        {/* Add more questions as needed */}
      </section>
      <footer className="p-4 bg-pink-400 text-purple-300">
        &copy; Barbie Design Studio
      </footer>
    </div>
  );
};

export default FAQPage;
