// src/components/GoogleAuth.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // After authentication, redirect to the home page
    navigate("/home");
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Logging in with Google...</h2>
    </div>
  );
};

export default GoogleAuth;
