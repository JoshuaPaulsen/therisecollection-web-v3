import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="flex-box-header header">
        <div className="headerText">
          <a href="/" >
            <h2>THE RISE COLLECTION</h2>
          </a>
        </div>
        <div className="menuItems" >
          <a href="#games" style={{textDecoration: 'none'}}>
            <p>GAMES</p>
          </a>
          <a href="#media" style={{textDecoration: 'none'}}>
            <p>MEDIA</p>
          </a>
          <a href="#software" style={{textDecoration: 'none'}}>
            <p>SOFTWARE</p>
          </a>
        </div>
      </div>
      <div
        id="/"
        style={{
          backgroundColor: "red",
        }}
        className="section-home"
      >
        <div id="home-text-container"></div>
      </div>

      <div
        className="section"
        style={{
          backgroundColor: "red",
        }}
      >
        <div className="angry-grid">
          <div id="item-0">
            <div className="section-games"></div>
          </div>
          <div id="item-1">
            <h4 id="games">Games</h4>
            <p>
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text
            </p>
          </div>
        </div>
      </div>
      <div
        className="section"
        style={{
          backgroundColor: "red",
        }}
      >
        <div className="angry-grid3">
          <div id="item-0">
            <h4 id="media">Media</h4>
            <p>
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text
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
          backgroundColor: "red",
        }}
      >
        <div className="angry-grid">
          <div id="item-0">
            <div className="section-software"></div>
          </div>
          <div id="item-1">
            <h4 id="software">Software</h4>
            <p>
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text
            </p>
          </div>
        </div>
      </div>
      <div
        className="section-footer"
        style={{
          backgroundColor: "red",
        }}
      ></div>
    </div>
  );
}
