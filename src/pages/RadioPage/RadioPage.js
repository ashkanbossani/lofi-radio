import React from 'react';
import "./RadioPage.scss";
import play from "./images/playBtn.png";
import { useState } from 'react';
import { motion } from 'framer-motion';

const RadioPage = () => {
    const [Btn, setBtn] = useState("play-pause");
    const [Btn2, setBtn2] = useState("playBtn");
    const [playPauseimg , setPlayPauseimg] = useState(play);

    const [live, setLive] = useState(false);
    const [pause, setPause] = useState("pause-screen");
    const [liveStream, setLiveStream] = useState("www.youtube.com/embed/k3WkJq478To");

    const [stationName, setStationName] = useState("ExpressWay");

    const [channel, setChannel] = useState("");

    const handlePlayPause = (e) => {
        let className = e.target.className;

        if(className === "play-pause" || className === "playBtn"){
            setBtn("pause-screen2");
            setBtn2("pauseBtn2");
        } else if (className === "pause-screen2" || className === "playBtn2"){
            setBtn("play-pause");
            setBtn2("playBtn");
            pause();
        }
    }

    return (
        <div>
            
        </div>
    );
};

export default RadioPage;