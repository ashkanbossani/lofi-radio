<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">



  <h1>LO-FI RADIO</h1>
  <p>A Radio app featuring lo-fi radio stations that play while showing animations. A hidden button that takes you to a login page using spotify credentials that will alow you to use a spotify web player. Made using React, Node.js, and Express.</p>
    
</div>

<br />

<!-- Table of Contents -->
# Table of Contents

- [About the Project](#about-the-project)
  * [Screenshots](#screenshots)
  * [Tech Stack](#tech-stack)
  * [Features](#features)
  * [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Run Locally](#run-locally)
- [Usage](#usage)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
  

<!-- About the Project -->
## About the Project


<!-- Screenshots -->
### Screenshots

![Screen Shot 2022-08-08 at 3 23 11 PM](https://user-images.githubusercontent.com/106493984/183525733-adaeaa86-7861-4f45-a4c4-da04fd634ebd.png)


<!-- TechStack -->
### Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://sass-lang.com/">SASS</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>


<!-- Features -->
### Features

- Lo-fi radio station channels with animation to go with choosen genre
- To-do and timer to help with productivity while having the app opened
- Spotify Web Player to play own personal music 



<!-- Env Variables -->
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_CLLIENT_ID=YOUR_CLIENT_ID`

`REACT_APP_BASE_URL=http://localhost:5050`

`REACT_APP_REDIRECT_URI=http://llocalhost:3000/chill`

<!-- Getting Started -->
## Getting Started

<!-- Prerequisites -->
### Prerequisites

<!-- Run Locally -->
### Run Locally

Clone the project

```bash
  git clone git@github.com:ashkanbossani/lofi-radio.git
```

Go to the project directory
```bash
 cd LOFI-VIBES-CLIENT
```

Install dependencies

```bash
  npm install
```

Clone Server code 

```bash
  git clone git@github.com:ashkanbossani/lofi-radio-server.git
```

Install dependencies

```bash'
  cd server
  npm install
```

Start the server

```bash
  cd server
  node index
```

Start the client

```bash
  npm start
```

<!-- Contact -->
## Contact

Ashkan Bossani  - abossani@hotmail.com

Project Link: https://github.com/ashkanbossani/lofi-radio

Demo: https://lofi-vibes-radio.netlify.app/


<!-- Acknowledgments -->
## Acknowledgements

Resources and libraries used in this project.

 - [Framer.com](https://www.framer.com/motion/)
 - [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar)
 - [spotify-web-playback](https://www.npmjs.com/package/react-spotify-web-playback)
