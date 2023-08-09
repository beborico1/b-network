import React from 'react';

const ForumsChatsSupportCommunity = () => {
  return (
    <div className="bg-pink-100 text-pink-900 h-screen flex flex-col">
      <header className="p-4 text-4xl bg-pink-200">
        Community Support
      </header>
      <section className="p-4 bg-pink-300 flex-grow grid grid-cols-2 gap-4 overflow-y-auto">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl text-pink-600">Forums</h2>
          <p className="text-pink-900">Join our community forums to ask questions, share ideas, and connect with other designers!</p>
          <a href="/forums" className="text-blue-500 underline">Go to Forums</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl text-pink-600">Live Chat</h2>
          <p className="text-pink-900">Need immediate help? Join our live chat support to talk with our team and community members.</p>
          <a href="/chat" className="text-blue-500 underline">Join Live Chat</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
          <h2 className="text-2xl text-pink-600">Community Guidelines</h2>
          <p className="text-pink-900">Our community thrives on respect and collaboration. Please read our guidelines to ensure a positive experience for everyone.</p>
          <a href="/guidelines" className="text-blue-500 underline">Read Guidelines</a>
        </div>
      </section>
    </div>
  );
};

export default ForumsChatsSupportCommunity;
