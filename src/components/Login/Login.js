import React from "react"

import { LoginButton, LoginLink } from "../../styles/login.styles"

const REACT_APP_CLIENT_ID = "4e54f2e7db4241989b2cb1afd294535d"
const REACT_APP_REDIRECT_URI = "http://localhost:3000/chill"

const Login = () => {
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

  return (
    <LoginButton>
      <LoginLink href={AUTH_URL}>Login with Spotify</LoginLink>
    </LoginButton>
  )
}

export default Login