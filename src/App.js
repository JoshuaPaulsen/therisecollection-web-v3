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
              Founded with a focus on Games, RISE pushed its first "release" to
              the IOS App Store in early 2015. We started out with a focus on
              the mobile platform and believed the environment would encourage
              developers to innovate for years to come! This really sparked a
              huge interest in software..
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
              Experience the media we capture through a first person lense... we
              want you to feel like your right there while viewing our videos!
              The "Media" project will eventually expand but right now focuses
              on cars through our redlightcam brand.
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
            <h4 id="software">Software</h4>
            <p className="infoText">
              Websites, Quality Assurance test plans, APIs, VR Content... We
              plan to try as much as we can! Follow along as we learn cool new
              tech + create documentation thats built for everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="section-footer"></div>
    </div>
  );
}
