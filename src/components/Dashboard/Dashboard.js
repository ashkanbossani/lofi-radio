import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import Player from "../Player/Player";
import TrackSearchResult from "../TrackSearchResults/TrackSearchResults";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import "./Dashboard.scss";

const serverUrl = process.env.REACT_APP_SERVER_URL;
const reactClientId = process.env.REACT_APP_CLIENT_ID;

const spotifyApi = new SpotifyWebApi({
  clientId: reactClientId,
});

const REACT_APP_BASE_URL = serverUrl;

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [lyrics, setLyrics] = useState("");

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
    setLyrics("");
  }

  //using  axios to make a GET request to the lyrics-finder API. The API returns the lyrics for a given track and artist
  useEffect(() => {
    if (!playingTrack) return;
    (() => {
      axios
        .get(`${REACT_APP_BASE_URL}/lyrics`, {
          params: {
            track: playingTrack.title,
            artist: playingTrack.artist,
          },
        })
        .then(({ data }) => {
          setLyrics(data.lyrics);
        });
    })();
  }, [playingTrack]);

  //This code is setting the access token for the Spotify API. This will allow the application to make authorized requests to the Spotify API.
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  //This code is making a GET request to the Spotify API to search for tracks. The search parameter is set to the value of the search state.
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    (async () => {
      const { body } = await spotifyApi.searchTracks(search);
      if (cancel) return;
      setSearchResults(
        body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    })();

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div className="dashboard-container">
      <Link style={{ textDecoration: "none" }} to="/music">
        <button class="button-64">
          <span class="text">RADIO</span>
        </button>
      </Link>
      <input
        className="search-input"
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="results-container">
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <div className="lyrics-container">{lyrics}</div>
        )}
      </div>
      <div className="player-container">
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </div>
  );
};

export default Dashboard;
