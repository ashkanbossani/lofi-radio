import React, { useState } from "react";
import mute from "../../assets/images/mute.png";
import volumeOn from "../../assets/images/volumeOn.png";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import "./AudioControls.scss";

let lastPlayedVolume = 0;
const AudioControls = ({
  PlayPause,
  ButtonClass,
  ButtonClass2,
  LiveStreamAudio,
  Live,
  playPauseImg,
}) => {

// Checking the classNameVol variable. If it is equal to "volumeOn" or "audioOnImg", the volume is set to 0. If it is equal to "volumeOff" or "audioOffImg", the volume is set back to the last played volume.
  const handleMute = (e) => {
    let classNameVol = e.target.className;
    if (classNameVol === "volumeOn" || classNameVol === "audioOnImg") {
      setVolumeImg(mute);
      setUnmute("volumeOff");
      setUnmute2("audioOffImg");
      lastPlayedVolume = volume;
      setVolume(0);
    } else if (classNameVol === "volumeOff" || classNameVol === "audioOffImg") {
      setVolumeImg(volumeOn);
      setUnmute("volumeOn");
      setUnmute2("audioOnImg");
      setVolume(lastPlayedVolume);
    }
  };

  const [muteCheck, setUnmute] = useState("volumeOn"); //unmute/mute change
  const [muteCheck2, setUnmute2] = useState("audioOnImg");
  const [volumeImg, setVolumeImg] = useState(volumeOn);
  const [volume, setVolume] = useState(0.35);

  return (
    <div>
      <div className="audio-control">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
          onClick={PlayPause}
          className={ButtonClass}
        >
          <img src={playPauseImg} className={ButtonClass2} alt="" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleMute}
          className={muteCheck}
        >
          <img className={muteCheck2} src={volumeImg} alt="" />
        </motion.div>
        <div>
          <input
            className="volume-dial"
            type="range"
            min={0}
            max={1}
            value={volume}
            step={0.01}
            onChange={(event) => {
              setVolume(event.target.valueAsNumber);
            }}
          />
        </div>
        <ReactPlayer
          className="live-stream-player"
          playing={Live}
          volume={volume}
          url={LiveStreamAudio}
        />
      </div>
    </div>
  );
};
export default AudioControls;
