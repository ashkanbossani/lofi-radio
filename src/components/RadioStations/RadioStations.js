import React from "react";
import { motion } from "framer-motion";
import start from "../../assets/images/playBtn.png";
import './RadioStations.scss';

const RadioStations = ({
    Express,
    PurpleSkies,
    CyberPunk,
    TheBeat,
    ChillHop,
    TheBreak,
    SmoothCriminal,
    AmbientJazz,
    TheJazzCafe,
}) => { 
  return (
    <>
      <div className="radio-list">
        <h1 className="radio-title">Synth Wave</h1>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          onClick={Express}
          className="station"
        >
          <img className="triangle" src={start} alt="" />
          Express Way
          </motion.div>
        </motion.div>

        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.15 }}>
        <motion.div
          whileHover={{ scale: 1.25}}
          whileTap={{ scale: 0.9 }}
          onClick={PurpleSkies}
          className="station"
        >
          <img className="triangle" src={start} alt="" />
          Purple Skies
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.25 }}>
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          onClick={CyberPunk}
          className="station"
        >
          <img className="triangle" src={start} alt="" />
            Cyber Punk
        </motion.div>
      </motion.div>
    
    <h1 className="radio-title">Hip-Hop</h1>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.35 }}>
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          onClick={TheBeat}
          className="station"
        >
          <img className="triangle" src={start} alt="" />
            The Beat
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.45 }}>
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          onClick={ChillHop}
          className="station"
        >
          <img className="triangle" src={start} alt="" />
            Chill Hop
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.65 }}>
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          onClick={TheBreak}
          className="station"
        >
          <img className="triangle" src={start} alt="" />
            The Break
        </motion.div>
      </motion.div>

      <h1 className="radio-title">Jazz</h1>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.75 }}>
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          onClick={SmoothCriminal}
          className="station"
        >
          <img className="triangle" src={start} alt="" />
            Smooth Criminal
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          onClick={AmbientJazz}
          className="station"
        >
          <img className="triangle" src={start} alt="" />
          <span>Ambient Jazz </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          onClick={TheJazzCafe}
          className="station"
        >
          <img className="triangle" src={start} alt="" />
          <span> The Jazz Cafe </span>
        </motion.div>
      </motion.div>
      </div>
    </>
  );
};

export default RadioStations;
