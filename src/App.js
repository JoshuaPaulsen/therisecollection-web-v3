import "./styles.css";
import { gamesMenu, mediaMenu, softwareMenu } from "./script/checkUnderline"


import React from 'react';
class App extends React.Component {

// componentDidMount() {
 
// }

render() {
	return (
    
    <div className="container">
      <div className="flex-box-header header">
        <div className="headerText">
          <a href="/">
            <h2>THE RISE COLLECTION</h2>
          </a>
        </div>
        <div className="menuItems" >
          <a href="#games" onClick={gamesMenu} >
            <p id="gamesMenuText">GAMES</p>
          </a>
          <a href="#media" onClick={mediaMenu}>
            <p id="mediaMenuText">MEDIA</p>
          </a>
          <a href="#software" onClick={softwareMenu} >
            <p id="softwareMenuText">SOFTWARE</p>
          </a>
        </div>
      </div>
      <div
        id="/"
        style={{
          backgroundColor: "black",
        }}
        className="section-home"
      >
        <div id="home-text-container"></div>
      </div>
      <div
        className="section"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="angry-grid">
          <div id="item-0">
            <div className="section-games"></div>
          </div>
          <div id="item-1">
            <h4 className="headerGames" id="games">Games</h4>
            <p className="infoTextGames">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div
        className="section"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="angry-grid3">
          <div id="item-0">
            <h4 className="headerMedia" id="media">Media</h4>
            <p className="infoTextMedia">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="item-1">
            <div className="section-media"></div>
          </div>
        </div>
      </div>

      <div
        className="section"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="angry-grid">
          <div id="item-0">
            <div className="section-software"></div>
          </div>
          <div id="item-1">
            <h4 className="headerSoftware" id="software">Software</h4>
            <p className="infoTextSoftware">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="section-footer"></div>
    </div>
  );
}
}

export default App;



