import './App.css';

export default function App() {
    return (
      <div className="body">
      <div className="App">
      <div className="row current-weather">
        <h1 id="new-city" className="capitalize">
          London
        </h1>
        <div className="col-6 text">
          <ul>
            <li>Updated 19:10</li>
            <li id="display-weather-description" className="capitalize">
              Cloudy
            </li>
          </ul>
          <div id="weather-today">
            <img id="weather-icon-today" src="/02d.svg" alt="weather icon" />
            <span id="temperature">11</span>°C
          </div>
        </div>
        <div className="col-6 weather-spec">
          <ul>
            <li>
              <img
                className="weather-spec-icons spec-text"
                src="/thermometer.svg"
                alt="thermometer icon"
              />
              <span className="spec-text-hide">Feels like </span>
              <span id="feels-like-temp">10</span>°C
            </li>
            <li>
              <img
                src="/raindrop.svg"
                alt="waterdrop icon"
                className="weather-spec-icons spec-text"
              />
              <span className="spec-text-hide">Chance of rain </span>
              <span id="precipitation">70</span>%
            </li>
            <li>
              <img
                className="weather-spec-icons spec-text"
                src="./icons/windsock.svg"
                alt="windsock icon"
              />
              <span className="spec-text-hide">Wind speed </span>
              <span id="wind">5</span> m/s
            </li>
          </ul>
        </div>
      </div>
      </div>
      <a href="https://github.com/metvor/react-week-4" target="_blank" rel="noreferrer">Open source code</a>
      </div>
  );
}

