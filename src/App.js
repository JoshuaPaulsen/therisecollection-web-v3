import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="flex-box-header header">
        <div className="headerText">
          <a href="/">
            <h2>THE RISE COLLECTION</h2>
          </a>
        </div>
        <div className="menuItems">
          <a href="#games">
            <p>GAMES</p>
          </a>
          <a href="#media">
            <p>MEDIA</p>
          </a>
          <a href="#software">
            <p>SOFTWARE</p>
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
            <h4 id="games">Games</h4>
            <p className="infoText">
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
            <h4 id="media">Media</h4>
            <p className="infoText">
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
            <h4 id="software">Discovery</h4>
            <p className="infoText">
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
