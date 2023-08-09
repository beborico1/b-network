import React from 'react';

const VirtualLearningSchool = () => {
  return (
    <div className="bg-pink-100 text-pink-900 h-screen flex flex-col">
      <header className="p-4 text-4xl bg-pink-200">
        Virtual Learning School
      </header>
      <section className="p-4 bg-pink-300 flex flex-wrap">
        <div className="w-1/2">
          <h2 className="text-2xl text-pink-600">Tutorials & Courses</h2>
          <ul className="list-disc list-inside text-pink-900">
            <li>Blockchain Basics</li>
            <li>Cryptocurrency Guide</li>
            <li>NFT Creation</li>
          </ul>
          <button className="bg-blue-400 text-white p-2 rounded mt-2">Explore All Courses</button>
        </div>
        <div className="w-1/2">
          <img src="virtual.png" alt="Virtual Learning" className="rounded-lg shadow-lg"/>
        </div>
      </section>
      <section className="p-4 bg-purple-100">
        <h2 className="text-2xl text-pink-600">Learning Path</h2>
        <p className="text-pink-900">
          Customize your learning journey and collaborate with other learners. Earn badges, certificates, and rewards!
        </p>
      </section>
      <section className="p-4 bg-pink-300">
        <h2 className="text-2xl text-pink-600">Partnerships</h2>
        <p className="text-pink-900">
          Collaborating with universities, schools, and other educational institutions to offer accredited courses and professional opportunities.
        </p>
      </section>
    </div>
  );
};

export default VirtualLearningSchool;
