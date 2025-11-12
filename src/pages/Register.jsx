import React, { useState, useEffect } from "react";

const Register = ({ switchForm }) => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');
  const [disableRegister, setDisableRegister] = useState(true);

  const handleRegisterForm = (e, type) => {
    if (type === 'text') {
      setText(e.target.value);
    } else if (type === 'email') {
      setEmail(e.target.value);
    } else if (type === 'password') {
      setPassword(e.target.value);
    } else if (type === 'confirmPassword') {
      setConformPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (
      text.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      conformPassword.length > 0
    ) {
      setDisableRegister(false);
    } else {
      setDisableRegister(true);
    }
  }, [text, email, password, conformPassword]);

  const handleRegister = () => {
    if (password !== conformPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === email) {
      alert("Account already exists! Please login.");
      switchForm();
      return;
    }

    const newUser = {
      name: text,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Registration successful! Please login now.");
    switchForm(); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-cyan-200 to-white p-4">
      <div className="w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden">
        <div className="h-130 bg-linear-to-b from-cyan-400 to-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create Account
          </h2>

          <input
            value={text}
            onChange={(e) => handleRegisterForm(e, 'text')}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 rounded-3xl border bg-linear-to-b from-cyan-400 to-cyan-300 border-gray-300 focus:outline-none focus:border-cyan-500 shadow-2xl"
          />

          <input
            value={email}
            onChange={(e) => handleRegisterForm(e, 'email')}
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-3xl border bg-linear-to-b from-cyan-300 to-cyan-200 border-gray-300 focus:outline-none focus:border-cyan-500 shadow-2xl"
          />

          <input
            value={password}
            onChange={(e) => handleRegisterForm(e, 'password')}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded-3xl border bg-linear-to-b from-cyan-200 to-cyan-100 border-gray-300 focus:outline-none focus:border-cyan-500 shadow-2xl"
          />

          <input
            value={conformPassword}
            onChange={(e) => handleRegisterForm(e, 'confirmPassword')}
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 mb-4 rounded-3xl border bg-linear-to-b from-cyan-100 to-white border-gray-300 focus:outline-none focus:border-cyan-500 shadow-2xl"
          />

          <button
            disabled={disableRegister}
            onClick={handleRegister}
            className={`w-full ${
              disableRegister ? "bg-gray-400" : "bg-cyan-500"
            } text-white p-3 rounded-3xl font-semibold transition shadow-2xl`}
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <span
              className="text-cyan-600 cursor-pointer hover:underline"
              onClick={switchForm}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
