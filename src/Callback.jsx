import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Callback = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const error = params.get('error');

    if (code) {
      console.log('Got auth code:', code);
      // send this to your backend for token exchange
    } else if (error) {
      console.error('Login failed:', error);
    } else {
      console.warn('No code or error found in callback');
    }
  }, [location]);

  return <div>Logging you in...</div>;
};

export default Callback;
