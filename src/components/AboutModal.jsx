export default function AboutModal({ setAboutModal }) {
  return (
    <>
      <div className="about-modal-container">
        <div className="about-modal-content">
          <h1>Gran Turismo 2 Showroom</h1>
          <p>
            This is a website where you can view 3D car models from the 1999
            Playstation game,{" "}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Gran_Turismo_2"
            >
              Gran Turismo 2
            </a>
          </p>
          <p>
            It is still a WIP, so the majority of the cars are not available at
            the moment
          </p>
          <p>
            Built by{" "}
            <a target="_blank" href="https://github.com/vbaptistella/">
              vbaptistella
            </a>{" "}
            with React, Javascript, HTML, CSS, model-viewer and three.js
          </p>
          <p>
            <a target="_blank" href="https://github.com/vbaptistella/">
              https://github.com/vbaptistella/
            </a>
          </p>
          <p>
            <button
              className="close-modal ui-button"
              onClick={() => setAboutModal(false)}
            >
              Close
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
