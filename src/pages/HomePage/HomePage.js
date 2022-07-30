import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./HomePage.scss";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div>
          <div className="hero-container">
            <div className="overlay"></div>
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
            <h1 className="title">Lo-fi</h1>
            <h1 className="title">Radio</h1>
            <h2 className="subtitle">A Study Space</h2>
          </div>
          <div className="wrap">
            <Link to="/music">
              <button class="welcome-button">Welcome</button>
            </Link>
            <div class="note-position-1 note-amination">&#9835;</div>
            <div class="note-position-2 note-amination animation-delay-2">
              &#9833;
            </div>
            {/* <div class="note-position-3 note-amination animation-delay-3">
                &#9834;
                </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
