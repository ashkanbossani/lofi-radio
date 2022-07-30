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
                        url="https://www.youtube.com/embed/tNyz-uVfSN0" 
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
                <h2 className="subtitle">Study Space</h2>
            </div>
            <div className="bubblecontainer">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
            <div className="wrap">
                <button class="welcome-button">Welcome</button>
            </div>

              
                
                 




           </div>
        </>
        )
    }

}

export default HomePage;