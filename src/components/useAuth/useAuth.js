import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  const REACT_APP_BASE_URL = "http://localhost:5050";

  // making a POST request to the `/login` endpoint. This request includes the code that was passed in through the query string.
  //If the request is successful, it will set the access token, refresh token, and expires in time in state.
  //If the request is not successful, it will redirect the user to the home page.
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { access_token, refresh_token, expires_in },
        } = await axios.post(`${REACT_APP_BASE_URL}/login`, {
          code,
        });
        setAccessToken(access_token);
        setRefreshToken(refresh_token);
        setExpiresIn(expires_in);
      } catch {
        window.location = "/music";
      }
    })();
  }, [code]);

  //This code is setting up a recurring interval that will make a POST request to the /refresh endpoint every time the access token expires. If the request is successful, it will update the access token and expiration time. If the request fails, the user will be redirected to the home page.
  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(async () => {
      try {
        const {
          data: { access_token, expires_in },
        } = await axios.post(`${REACT_APP_BASE_URL}/refresh`, {
          refreshToken,
        });
        setAccessToken(access_token);
        setExpiresIn(expires_in);
      } catch {
        window.location = "/";
      }
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
