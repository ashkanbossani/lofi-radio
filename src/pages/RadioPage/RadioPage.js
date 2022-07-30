import React from "react";
import "./RadioPage.scss";
import play from "../../assets/images/playBtn.png";
import { useState } from "react";
import { motion } from "framer-motion";

const RadioPage = () => {
  const [Btn, setBtn] = useState("play-pause");
  const [Btn2, setBtn2] = useState("playBtn");
  const [playPauseimg, setPlayPauseimg] = useState(play);

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
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  const PurpleSkies = () => {
    setVideo("www.youtube.com/embed/5WJa4SQu2K8");
    setStationName("PurpleSkies");
    setLiveStream(
      "https://www.youtube.com/watch?v=5WJa4SQu2K8&ab_channel=VirtuaWaves"
    );
    setLive(true);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  const CyberPunk = () => {
    setVideo("/www.youtube.com/embed/y2ECgOhoDGs");
    setStationName("CyberPunk");
    setLiveStream(
      "https://www.youtube.com/watch?v=y2ECgOhoDGs&ab_channel=MrSuicideSheep"
    );
    setLive(true);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  //HipHop

  const TheBeat = () => {
    setVideo("https://www.youtube.com/embed/LfKq9cmnO_A");
    setStationName("TheBeat");
    setLiveStream(
      "https://www.youtube.com/watch?v=aLqc8TdoLJ0&ab_channel=IvyStationRecords"
    );
    setLive(true);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  const ChillHop = () => {
    setVideo("https://www.youtube.com/embed/aGSYKFb_zxg");
    setStationName("ChillHop");
    setLiveStream("https://www.youtube.com/watch?v=aGSYKFb_zxg");
    setLive(true);
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
    setVideo("https://www.youtube.com/embed/llicpJ5q42s");
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
    setVideo("https://www.youtube.com/embed/nCQuu7ukTEQ");
    setStationName("AmbientJazz");
    setLiveStream("https://www.youtube.com/watch?v=nCQuu7ukTEQ");
    setLive(true);
    setPause("pause-screen2");
    setBtn("play-pause2");
    setBtn2("pauseBtn2");
  };

  const TheJazzCafe = () => {
    setVideo("https://www.youtube.com/embed/EaK_W0SSO8o");
    setStationName("TheJazzCafe");
    setLiveStream("https://www.youtube.com/watch?v=EaK_W0SSO8o");
    setLive(true);
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
    </>
  );
};

export default RadioPage;
