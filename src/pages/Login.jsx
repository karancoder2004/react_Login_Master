import React, { useEffect, useState } from 'react';

const Login = ({ switchForm, onLoginSuccess }) => { 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [disableLogin, setDisableLogin] = useState(true);

  const handleLoginForm = (e, type) => {
    if (type === 'email') setEmail(e.target.value);
    else if (type === 'password') setPassword(e.target.value);
  };

  useEffect(() => {
    if (password.length > 0 && email.length > 0) {
      setDisableLogin(false);
    } else {
      setDisableLogin(true);
    }
  }, [password, email]);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      alert('You have not account. Please register now!');
      switchForm();
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      if (onLoginSuccess) onLoginSuccess(storedUser);
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-cyan-200 to-white p-4">
      <div className="w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden">
        <div className="h-130 bg-linear-to-b from-cyan-400 to-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login Page
          </h2>

          <input
            value={email}
            onChange={(e) => handleLoginForm(e, 'email')}
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-3xl border bg-linear-to-b from-cyan-400 to-cyan-300 border-gray-300 focus:outline-none focus:border-cyan-500 shadow-2xl"
          />

          <input
            value={password}
            onChange={(e) => handleLoginForm(e, 'password')}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-3xl border bg-linear-to-b from-cyan-300 to-cyan-100 border-gray-300 focus:outline-none focus:border-cyan-500 shadow-2xl"
          />

          <button
            disabled={disableLogin}
            onClick={handleLogin}
            className={`w-full ${disableLogin ? 'bg-gray-400' : 'bg-cyan-500'} text-white p-3 rounded-3xl font-semibold transition shadow-2xl`}
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <span
              onClick={switchForm}
              className="text-cyan-600 cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
