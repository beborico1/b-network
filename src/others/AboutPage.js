import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-pink-100 text-barbie p-8">
      <header className="text-center text-4xl bg-pink-200 p-4">
        About Barbie Design Studio - August 9, 2023
      </header>
      <section className="p-4 bg-pink-300">
        <h2 className="text-3xl text-center mb-4">Introducing the B-Network Protocol</h2>
        <p>The B-Network Protocol represents our commitment to integrate state-of-the-art blockchain technology with the elegance and timelessness of Barbie. Designed specifically for the Web 3 environment, this protocol not only ensures secure transactions but also fosters an ecosystem where creativity is rewarded, privacy is respected, and innovation is a constant.</p>
      </section>
      <section className="p-4 bg-pink-400 text-pink-900">
        <h2 className="text-2xl">Our Mission</h2>
        <p>Barbie Design Studio's mission is to empower creativity and imagination through cutting-edge design tools, while promoting inclusivity and accessibility. By blending the elegant aesthetics of Barbie with advanced technology, we aim to inspire and engage users from all walks of life, bringing the joy and magic of Barbie into the digital realm.</p>
      </section>
      <section className="p-4 bg-pink-500 flex flex-wrap text-white">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl">Creativity Channels & BarbieToken</h2>
          <p>Our Creativity Channels offer a unique space for users to explore and express their artistic talents. Here, creativity knows no bounds. To amplify this experience, we introduce the BarbieToken. As our integrated cryptocurrency based on Ethereum, BarbieToken is more than just a currency. It's an invitation to collaborate, to participate, and to be rewarded for your contribution to our flourishing community of designers, artists, and enthusiasts.</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="BT-transparent.png" alt="Barbie Design Studio" className="rounded-full w-1/2 p-4"/>
        </div>
      </section>
      <section className="p-4 bg-purple-200">
        <h2 className="text-2xl text-center mb-4">Our Team</h2>
        <div className="justify-center items-center flex flex-wrap gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md text-center mx-auto">
            <img src="bebo.jpg" alt="Bebo" className="rounded-full mb-2 shadow-md w-1/2 mx-auto"/>
            <h3>Luis Rico</h3>
            <p>Full-Stack Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
