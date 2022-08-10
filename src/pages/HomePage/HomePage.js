import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import { Helmet } from "react-helmet";

class HomePage extends React.Component {
  render() {
    return (
      <>
      <Helmet>
        <title>RADIO</title>
      </Helmet>
        <div>
          <div className="hero-container">
            <div className="hero-conatiner__overlay"></div>
            <div className="video-container">
              <ReactPlayer
                className="react-player"
                url="www.youtube.com/embed/_4kLioMoMrk?controls=0&amp;start=20"
                width="100%"
                height="100%"
                position="relative"
                playing={true}
                loop={true}
                muted={true}
              />
            </div>
          </div>
          <div className="title-container">
            <h1 className="title-container__title">Lo-fi</h1>
            <h1 className="title-container__title">Radio</h1>
            <h2 className="title-container__subtitle">A Study Space</h2>
          </div>
          <div className="wrap">
            <Link to="/music">
              <button class="welcome-button">Welcome</button>
            </Link>
            <div className="note-position-1 note-amination">&#9835;</div>
            <div className="note-position-2 note-amination animation-delay-2">
              &#9833;
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
