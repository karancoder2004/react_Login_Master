import React from "react";

const Account = ({ userData, onLogout }) => {
  if (!userData) return null; 
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-cyan-200 to-white p-4">
      <div className="w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden">
        <div className="h-100 bg-linear-to-b from-cyan-400 to-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          My Account
        </h2>

        <p className="text-lg text-gray-800 mb-2">
          <strong>Name:</strong> {userData.name}
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Email:</strong> {userData.email}
        </p>
        <p className="text-lg text-gray-800 mb-6">
          <strong>Password:</strong> {userData.password}
        </p>

        <button
          onClick={onLogout}
          className="w-full bg-red-500 text-white py-2 rounded-xl font-semibold hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
    </div>
  );
};

export default Account;
