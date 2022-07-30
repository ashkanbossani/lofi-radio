import React from 'react';
import ReactPlayer from 'react-player';
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
                        url="www.youtube.com/embed/_ITiwPMUzho"
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
                <h1 className="title">Vibes</h1>
                <h2 className="subtitle">A Study Space</h2>
            </div>
            <div className="bubble-container">
                <div className="bubble1"></div>
                <div className="bubble2"></div>
                <div className="bubble3"></div>
            </div>
            <div className="wrap">
                <button class="welcome-button">Welcome</button>
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
        )
    }

}

export default HomePage;