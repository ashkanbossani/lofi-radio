import React from "react";
import "./TrackSearchResults.scss";

const TrackSearchResult = ({ track, chooseTrack }) => {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div className="result-container" onClick={handlePlay}>
      <img className="result-image" src={track.albumUrl} />
      <div className="song-container">
        <p className="title-text">{track.title}</p>
        <p className="artist-text">{track.artist}</p>
      </div>
    </div>
  );
};

export default TrackSearchResult;
