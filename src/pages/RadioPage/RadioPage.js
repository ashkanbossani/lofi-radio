import "./RadioPage.scss";
import play from "../../assets/images/playBtn.png";
import pauseImg from "../../assets/images/pause.png";
import { useState } from "react";
import RadioStations from "../../components/RadioStations/RadioStations";
import ReactPlayer from "react-player";
import AudioControls from "../../components/AudioControls/AudioControls";
import Timer from "../../components/Timer/Timer";
import SettingsScreen from "../../components/SettingsScreen/SettingsScreen";
import SettingsContext from "../../components/SettingsContext/SettingsContext";
import Draggable from "react-draggable";
import TodoList from "../../components/TodoList/TodoList";
import { Link  } from "react-router-dom";

const RadioPage = () => {
  const [Btn, setBtn] = useState("play-pause");
  const [Btn2, setBtn2] = useState("playBtn");
  const [playPause, setPlayPause] = useState(play);

  const [live, setLive] = useState(false);
  const [pausePage, setPausePage] = useState("pause-screen");
  const [liveStream, setLiveStream] = useState(
    "www.youtube.com/embed/k3WkJq478To"
  );

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  const [stationName, setStationName] = useState("ExpressWay");



  //  handlePlayPause is a function that takes in an event (e) object as a parameter. It then defines a variable, className, and sets it equal to the className property of the event target (e.target). 

  //If the className is equal to "play-pause" or "playBtn", the function sets the playPause state variable to pauseImg, sets the btn state variable to "play-pause2", and sets the btn2 state variable to "playBtn2". It then calls the playMusic function.

  //If the className is equal to "play-pause2" or "playBtn2", the function sets the playPause state variable to play, sets the btn state variable to "play-pause", and sets the btn2 state variable to "playBtn". It then calls the pauseMusic function.
  const handlePlayPause = (e) => {
    let className = e.target.className;

    if (className === "play-pause" || className === "playBtn") {
      setPlayPause(pauseImg);
      setBtn("play-pause2");
      setBtn2("playBtn2");
      playMusic();
    } else if (className === "play-pause2" || className === "playBtn2") {
      setPlayPause(play);
      setBtn("play-pause");
      setBtn2("playBtn");
      pauseMusic();
    }
  };

  const pauseMusic = () => {
    setPausePage("pause-screen");
    setLive(false);
  };

  const playMusic = () => {
    setPausePage("pause-screen2");
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
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  const PurpleSkies = () => {
    setVideo("https://www.youtube.com/embed/5WJa4SQu2K8?start=15");
    setStationName("PurpleSkies");
    setLiveStream(
      "https://www.youtube.com/watch?v=5WJa4SQu2K8&ab_channel=VirtuaWaves"
    );
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  const CyberPunk = () => {
    setVideo("https://www.youtube.com/embed/AGsPsHIB7eU?start=3");
    setStationName("CyberPunk");
    setLiveStream(
      "https://www.youtube.com/watch?v=y2ECgOhoDGs&ab_channel=MrSuicideSheep"
    );
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  //HipHop

  const TheBeat = () => {
    setVideo("https://www.youtube.com/embed/F1B9Fk_SgI0");
    setStationName("TheBeat");
    setLiveStream(
      "https://www.youtube.com/watch?v=aLqc8TdoLJ0&ab_channel=IvyStationRecords"
    );
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  const ChillHop = () => {
    setVideo("https://www.youtube.com/embed/UJH5Dgf62Vk?start=6");
    setStationName("ChillHop");
    setLiveStream("https://www.youtube.com/watch?v=aGSYKFb_zxg");
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  const TheBreak = () => {
    setVideo("https://www.youtube.com/embed/e6UbNoNvl80");
    setStationName("TheBreak");
    setLiveStream("https://www.youtube.com/watch?v=zVqJv_dKUEs");
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  //Jazz

  const SmoothCriminal = () => {
    setVideo("https://www.youtube.com/embed/dLWy8ZgRPKE?start=26");
    setStationName("SmoothCriminal");
    setLiveStream(
      "https://www.youtube.com/watch?v=bz5q5gl2uZA&ab_channel=Musictag"
    );
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  const AmbientJazz = () => {
    setVideo("https://www.youtube.com/embed/bz5q5gl2uZA");
    setStationName("AmbientJazz");
    setLiveStream("https://www.youtube.com/watch?v=nCQuu7ukTEQ");
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  const TheJazzCafe = () => {
    setVideo("https://www.youtube.com/embed/-5KAN9_CzSA?start=3");
    setStationName("TheJazzCafe");
    setLiveStream(
      "https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"
    );
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  // Dance

  const TheDance = () => {
    setVideo("https://www.youtube.com/embed/a7kieyUH45Y");
    setStationName("TheDance");
    setLiveStream("https://www.youtube.com/embed/Khd-uyOuhGo");
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  const Alien = () => {
    setVideo("https://www.youtube.com/embed/wVKDb9RTkrI");
    setStationName("Alien");
    setLiveStream(
      "https://www.youtube.com/watch?v=n__NrG-QGb4&ab_channel=KiffenBeats"
    );
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  const GoodVibes = () => {
    setVideo("https://www.youtube.com/embed/zdYzL6wkr0A");
    setStationName("GoodVibes");
    setLiveStream(
      "https://www.youtube.com/watch?v=EHvDNpJK_Ks&ab_channel=KiffenBeats"
    );
    setLive(true);
    setPlayPause(pauseImg);
    setPausePage("pause-screen2");
    setBtn("play-pause2");
    setBtn2("playBtn2");
  };

  return (
    <>
      <div className="main-container">
        <div className="radio-container">
          <Link style={{textDecoration: 'none'}} to ="/">
          <div className="logo">Lo-fi Radio</div>
          </Link>
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
              TheDance={TheDance}
              Alien={Alien}
              GoodVibes={GoodVibes}
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
          playPauseImg={playPause}
        />
      </div>
      <div className={pausePage}>
        <p className="pause-title">Music Paused</p>
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
      <Draggable>
        <div className="timer">
          <SettingsContext.Provider value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
          }}>
          {showSettings ? <SettingsScreen/> : <Timer/>}
          </SettingsContext.Provider>
        </div>
      </Draggable>

      <Draggable>
        <div className="todo">
          <TodoList/>
        </div>
      </Draggable>
      <div className="chilllounge-btn">
        <Link style={{textDecoration: 'none'}} to="/chill">
        <button className="chilllounge-btn__btn">Chill Lounge</button>
        </Link>
      </div>
    
    </>
  );
};

export default RadioPage;
