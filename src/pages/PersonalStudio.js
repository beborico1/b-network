import React from 'react';

const PersonalStudio = () => {
  return (
    <div className="bg-pink-100 text-pink-900 h-screen flex flex-col">
      <header className="p-4 text-4xl bg-pink-200">
        Your Personal Studio
      </header>
      <section className="p-4 bg-pink-300 flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl text-pink-600">My Designs</h2>
          <p className="text-pink-900">View and edit your saved designs. Let your creativity flow!</p>
          <a href="/my-designs" className="text-blue-500 underline">Go to My Designs</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl text-pink-600">Design Tools</h2>
          <p className="text-pink-900">Explore our design tools like color palettes, patterns, and fashion models inspired by Barbie.</p>
          <a href="/design-tools" className="text-blue-500 underline">Explore Design Tools</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
          <h2 className="text-2xl text-pink-600">Collaborate in Real Time</h2>
          <p className="text-pink-900">Invite friends to join your virtual design room and work on designs together.</p>
          <a href="/collaborate" className="text-blue-500 underline">Start Collaborating</a>
        </div>
      </section>
    </div>
  );
};

export default PersonalStudio;
