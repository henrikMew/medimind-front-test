import React from 'react';

const LoginButton = () => {
  const clientId = process.env.REACT_APP_HELSEID_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_HELSEID_REDIRECT_URI;

  const login = () => {
    const authUrl = `https://helseid-sts.utvikling.nhn.no/authorize?` +
      `client_id=${clientId}&` +
      `response_type=code&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `scope=openid profile`;

    window.location.href = authUrl;
  };

  return <button onClick={login}>Log in with HelseID</button>;
};

export default LoginButton;
