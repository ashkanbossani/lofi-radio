import React from "react";
import "./RadioPage.scss";
import play from "../../assets/images/playBtn.png";
import { useState } from "react";
import { motion } from "framer-motion";
import RadioStations from "../../components/RadioStations/RadioStations";
import ReactPlayer from "react-player";
import AudioControls from "../../components/AudioControls/AudioControls";
import pause from "../../assets/images/pause.png";

const RadioPage = () => {
  const [Btn, setBtn] = useState("play-pause");
  const [Btn2, setBtn2] = useState("playBtn");
  const [playPauseImg, setPlayPauseimg] = useState(play);

  const [live, setLive] = useState(false);
  const [pause, setPause] = useState("pause-screen");
  const [liveStream, setLiveStream] = useState(
    "www.youtube.com/embed/k3WkJq478To"
  );

  const [stationName, setStationName] = useState("ExpressWay");

  const [channel, setChannel] = useState("");

  const handlePlayPause = (e) => {
    let className = e.target.className;

    if (className === "play-pause" || className === "playBtn") {
      setBtn("play-pause2");
      setBtn2("pauseBtn2");
    } else if (className === "pause-screen2" || className === "playBtn2") {
      setBtn("play-pause");
      setBtn2("playBtn");
      pause();
    }
  };

  const pauseMusic = () => {
    setPause("pause-screen");
    setLive(false);
  };

  const playMusic = () => {
    setPause("pause-screen2");
    setLive(true);
  };

  const [video, setVideo] = useState("www.youtube.com/embed/k3WkJq478To");

  // Radio Stations

  //Synthwave

  const ExpressWay = () => {
    setVideo("www.youtube.com/embed/k3WkJq478To");
    setStationName("ExpressWay");
    setLiveStream("www.youtube.com/embed/k3WkJq478To");
    setLive(true);
    setPlayPauseimg(pause)
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  const PurpleSkies = () => {
    setVideo("https://www.youtube.com/embed/5WJa4SQu2K8?start=15");
    setStationName("PurpleSkies");
    setLiveStream(
      "https://www.youtube.com/watch?v=5WJa4SQu2K8&ab_channel=VirtuaWaves"
    );
    setLive(true);
    setPlayPauseimg(pause);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  const CyberPunk = () => {
    setVideo("https://www.youtube.com/embed/AGsPsHIB7eU?start=3");
    setStationName("CyberPunk");
    setLiveStream(
      "https://www.youtube.com/watch?v=y2ECgOhoDGs&ab_channel=MrSuicideSheep"
    );
    setLive(true);
    setPlayPauseimg(pause);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  //HipHop

  const TheBeat = () => {
    setVideo("https://www.youtube.com/embed/F1B9Fk_SgI0");
    setStationName("TheBeat");
    setLiveStream(
      "https://www.youtube.com/watch?v=aLqc8TdoLJ0&ab_channel=IvyStationRecords"
    );
    setLive(true);
    setPlayPauseimg(pause);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  const ChillHop = () => {
    setVideo("https://www.youtube.com/embed/UJH5Dgf62Vk?start=6");
    setStationName("ChillHop");
    setLiveStream("https://www.youtube.com/watch?v=aGSYKFb_zxg");
    setLive(true);
    setPlayPauseimg(pause);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  const TheBreak = () => {
    setVideo("https://www.youtube.com/embed/e6UbNoNvl80");
    setStationName("TheBreak");
    setLiveStream("https://www.youtube.com/watch?v=zVqJv_dKUEs");
    setLive(true);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  //Jazz

  const SmoothCriminal = () => {
    setVideo("https://www.youtube.com/embed/dLWy8ZgRPKE?start=26");
    setStationName("SmoothCriminal");
    setLiveStream(
      "https://www.youtube.com/watch?v=bz5q5gl2uZA&ab_channel=Musictag"
    );
    setLive(true);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  const AmbientJazz = () => {
    setVideo("https://www.youtube.com/embed/bz5q5gl2uZA");
    setStationName("AmbientJazz");
    setLiveStream("https://www.youtube.com/watch?v=nCQuu7ukTEQ");
    setLive(true);
    setPlayPauseimg(pause);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  const TheJazzCafe = () => {
    setVideo("https://www.youtube.com/embed/-5KAN9_CzSA?start=3");
    setStationName("TheJazzCafe");
    setLiveStream(
      "https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"
    );
    setLive(true);
    setPlayPauseimg(pause);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  return (
    <>
      <div className="main-container">
        <div className="radio-container">
          <div className="logo">Lo-fi Radio</div>
          <div className="radio-stations__container">
            <RadioStations
              Express={ExpressWay}
              PurpleSkies={PurpleSkies}
              CyberPunk={CyberPunk}
              TheBeat={TheBeat}
              ChillHop={ChillHop}
              TheBreak={TheBreak}
              SmoothCriminal={SmoothCriminal}
              AmbientJazz={AmbientJazz}
              TheJazzCafe={TheJazzCafe}
            />
          </div>
        </div>
      </div>
      <div className="audio-controls__container">
        <AudioControls
          PlayPause={handlePlayPause}
          ButtonClass={Btn}
          ButtonClass2={Btn2}
          LiveStreamAudio={liveStream}
          Live={live}
          playPauseImg={playPauseImg}
        />
      </div>
      <div className="video-container2">
        <ReactPlayer
          className="vid"
          width="140%"
          height="140%"
          loop="true"
          playing={live}
          volume="mute"
          url={video}
        />
      </div>
    </>
  );
};

export default RadioPage;
