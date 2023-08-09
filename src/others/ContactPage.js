import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-pink-100 text-pink-600 p-8">
      <section className="text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-pink-700 mt-4">We'd love to hear from you!</p>
      </section>
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="bg-pink-200 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-pink-500 mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-pink-500 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-pink-500 mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-pink-500 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-pink-500 mb-2">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 border border-pink-500 rounded"></textarea>
          </div>
          <button type="submit" className="bg-pink-400 text-white p-2 rounded w-full hover:bg-pink-300">Send Message</button>
        </form>
        <div className="bg-purple-200 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-purple-700">Address</h3>
          <p className="text-purple-500 mt-2">123 Barbie St.</p>
          <p className="text-purple-500">Toyland, TL 12345</p>

          <h3 className="text-2xl font-semibold text-purple-700 mt-4">Phone</h3>
          <p className="text-purple-500">123-456-7890</p>

          <h3 className="text-2xl font-semibold text-purple-700 mt-4">Email</h3>
          <p className="text-purple-500">contact@barbiedesignstudio.com</p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
