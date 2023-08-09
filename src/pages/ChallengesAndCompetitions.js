import React from 'react';

const ChallengesAndCompetitions = () => {
  return (
    <div className="bg-pink-100 text-pink-900 h-screen">
      <header className="p-4 text-4xl bg-pink-200">
        Challenges and Competitions
      </header>
      <section className="p-4 bg-pink-300 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl text-pink-600">Futuristic Fashion</h2>
          <p className="text-pink-900">Design clothing for the future! Use eco-friendly materials and futuristic designs to create something out of this world.</p>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 w-full mt-4">Join Challenge</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl text-pink-600">Vintage Revival</h2>
          <p className="text-pink-900">Bring the past to life with a modern twist. Create vintage-inspired clothing with modern sustainability practices.</p>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 w-full mt-4">Join Challenge</button>
        </div>
        {/* Add more challenges as needed */}
      </section>
    </div>
  );
};

export default ChallengesAndCompetitions;
