import { useState, useEffect } from "react"
import axios from "axios"

const useAuth = code => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  const REACT_APP_BASE_URL = "http://localhost:3001"

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { access_token, refresh_token, expires_in },
        } = await axios.post(`${REACT_APP_BASE_URL}/login`, {
          code,
        })
        setAccessToken(access_token)
        setRefreshToken(refresh_token)
        setExpiresIn(expires_in)
        // window.history.pushState({}, null, `/chill/`)
      } catch {
        // window.location = `/chill/`
      }
    })()
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(async () => {
      try {
        const {
          data: { access_token, expires_in },
        } = await axios.post(`${REACT_APP_BASE_URL}/refresh`, {
          refreshToken,
        })
        setAccessToken(access_token)
        setExpiresIn(expires_in)
      } catch {
        window.location = "/"
      }
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}

export default useAuth