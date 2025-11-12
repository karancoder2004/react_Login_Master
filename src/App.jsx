import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLoginSuccess = (user) => {
    setLoggedIn(true);
    setUserData(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowLogin(true);
    setUserData(null);
  };

  return (
    <div>
      <Navbar />
      <div>
        {loggedIn ? (
          <Account userData={userData} onLogout={handleLogout} />
        ) : showLogin ? (
          <Login switchForm={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Register switchForm={() => setShowLogin(true)} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
