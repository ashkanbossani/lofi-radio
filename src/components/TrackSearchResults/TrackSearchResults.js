import React from "react";
import "./TrackSearchResults.scss";

const TrackSearchResult = ({ track, chooseTrack }) => {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div className="result-container" onClick={handlePlay}>
      <img
        className="result-container__image"
        alt="album"
        src={track.albumUrl}
      />
      <div className="song-container">
        <p className="song-container__title">{track.title}</p>
        <p className="song-container__artist">{track.artist}</p>
      </div>
    </div>
  );
};

export default TrackSearchResult;
