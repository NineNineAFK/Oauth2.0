// src/components/OpenHomepage.jsx
import React from 'react';

const OpenHomepage = () => {
  const handleGoogleLogin = () => {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google/login`, "_self");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Welcome to the Open Homepage</h1>
      <button 
        onClick={handleGoogleLogin} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Continue with Google
      </button>
    </div>
  );
};

export default OpenHomepage;
