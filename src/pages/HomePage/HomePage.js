import React from 'react';
import ReactPlayer from 'react-player';
import "./HomePage.scss";

class HomePage extends React.Component {
    render() {
        return (
           <div>
            <div className="hero-container">
                <div className="video-container">
                    <ReactPlayer 
                    className="react-player"
                    url="//www.youtube.com/embed/TGan48YE9Us?autoplay=1&mute=1&start=20"
                    width="100%"
                    height="100%"
                    position="relative"
                    playing={true}
                    loop={true}
                    muted={false}
                    />
                </div>
            </div>




           </div>
        );
    }
}

export default HomePage;