import React from 'react';

const AuthenticationAndRegistration = () => {
  return (
    <div className="bg-pink-100 text-pink-900 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h1 className="text-4xl text-pink-600 mb-4">Welcome to Barbie Design Studio!</h1>
        <div className="flex gap-8">
          <div className="w-1/2">
            <h2 className="text-2xl text-pink-500 mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-pink-400">Username</label>
                <input type="text" id="username" className="border border-pink-300 rounded p-2 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-pink-400">Password</label>
                <input type="password" id="password" className="border border-pink-300 rounded p-2 w-full" />
              </div>
              <button className="bg-pink-500 text-white p-2 rounded hover:bg-pink-400 w-full">Login</button>
            </form>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl text-blue-500 mb-4">Register</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-pink-400">Email</label>
                <input type="email" id="email" className="border border-pink-300 rounded p-2 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="register-username" className="block text-pink-400">Username</label>
                <input type="text" id="register-username" className="border border-pink-300 rounded p-2 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="register-password" className="block text-pink-400">Password</label>
                <input type="password" id="register-password" className="border border-pink-300 rounded p-2 w-full" />
              </div>
              <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 w-full">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationAndRegistration;
