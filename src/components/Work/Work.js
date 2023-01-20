import "./Work.css";
import Memorygame from "../../assets/memgame.PNG";
import Weatherapp from "../../assets/weatherapp.PNG";
import Githublogo from "../../assets/github-mark.png";

function Work() {
  return (
    <div className="wtext-container">
      <h1 id="work">GitHub repositories</h1>
      <div className="grid-container">
        <div className="grid-element elem1">
          <a href="https://github.com/zsoltb91/memory-game">
            <img
              alt="GitHub logo"
              className="githublogo"
              src={Githublogo}
            ></img>
          </a>
          <h2>JavaScript - memory game</h2>
          <p>A simple memory game created in JavaScript.</p>
          <a href="https://github.com/zsoltb91/memory-game">
            <img className="imgs" alt="memory game" src={Memorygame}></img>
          </a>
        </div>

        <div className="grid-element elem2">
          <a href="https://github.com/zsoltb91/weather1">
            <img
              alt="GitHub logo"
              className="githublogo"
              src={Githublogo}
            ></img>
          </a>
          <h2>React - weather API</h2>
          <p>Weather information of cities with openweathermap API.</p>
          <a href="https://github.com/zsoltb91/weather1">
            <img className="imgs" alt="weather app" src={Weatherapp}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
