import React from 'react';

const CommunityGallery = () => {
  return (
    <div className="bg-pink-100 text-pink-900 h-screen">
      <header className="p-4 text-4xl bg-pink-200">
        Community Gallery
      </header>
      <section className="p-4 bg-pink-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src="futuristic.jpg" alt="Design 1" className="w-full h-48 object-cover rounded" />
          <h2 className="text-2xl text-pink-600 mt-2">Futuristic Dress</h2>
          <p className="text-pink-900 text-sm">Designed by: PinkDesignQueen </p>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 w-full mt-4">View Details</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src="ecofriendly.jpg" alt="Design 2" className="w-full h-48 object-cover rounded" />
          <h2 className="text-2xl text-pink-600 mt-2">Eco-friendly Outfit</h2>
          <p className="text-pink-900 text-sm">Designed by: TrendyTailor </p>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 w-full mt-4">View Details</button>
        </div>
        {/* Add more designs as needed */}
      </section>
    </div>
  );
};

export default CommunityGallery;
