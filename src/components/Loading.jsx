import "./styles/loading.css";

export default function Loading({ message, fullscreen }) {
  return (
    <div className={`loading ${fullscreen && "fullscreen"}`}>
      <p className="loading-message">{message}</p>
      <div className="loading-animation"></div>
    </div>
  );
}
