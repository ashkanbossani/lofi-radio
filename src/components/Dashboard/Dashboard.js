import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useAuth from "../useAuth/useAuth"
import Player from "../Player/Player"
import TrackSearchResult from "../TrackSearchResults/TrackSearchResults"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"
import "./Dashboard.scss"
import {
  DashBoardContainer,
  SearchInput,
  ResultsContainer,
  LyricsContainer,
  PlayerContainer,
} from "../../styles/Dashboard.styles"

const spotifyApi = new SpotifyWebApi({
  clientId: "4e54f2e7db4241989b2cb1afd294535d",
})

const REACT_APP_BASE_URL = "http://localhost:3001"

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  }

  useEffect(() => {
    if (!playingTrack) return
    ;(async () => {
      const {
        data: { lyrics },
      } = await axios.get(`${REACT_APP_BASE_URL}/lyrics`, {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      setLyrics(lyrics)
    })()
  }, [playingTrack])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    ;(async () => {
      const { body } = await spotifyApi.searchTracks(search)
      if (cancel) return
      setSearchResults(
        body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })()

    return () => (cancel = true)
  }, [search, accessToken])

  return (
    <DashBoardContainer>
        <Link to="/music">
        <button class="button-64" role="button"><span class="text">RADIO</span></button>
        </Link>
      <SearchInput
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ResultsContainer>
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <LyricsContainer>{lyrics}</LyricsContainer>
        )}
      </ResultsContainer>
      <PlayerContainer>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </PlayerContainer>
    </DashBoardContainer>
  )
}

export default Dashboard