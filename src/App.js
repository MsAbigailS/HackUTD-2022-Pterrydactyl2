import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,200" />
        
        
        <div class="navbar">
          <button type="button" class="col-4" id="gps-button">
            <i class="material-symbols-rounded">explore</i>
          </button>
          <button type="button" id="bluetooth-button">
            <i class="material-symbols-rounded">bluetooth</i>
          </button>
          <div class="media-player-navigation">
            <button type="button" id="previous-media-button">
              <i class="material-symbols-rounded">arrow_back_ios</i>
            </button>
            <p>Current Song - Current Artist...</p>
            <button type="button" id="next_media_button">
              <i class="material-symbols-rounded">arrow_forward_ios</i>
            </button>
          </div>

          <button type="button" id="thermostat-button">
            <i class="material-symbols-rounded">thermostat</i>
          </button>
          

          
        </div>

        <div class="sub-navbar">
          <p>This is where apps, mapping, notices buttons will go</p>
        </div>
      </header>

      <body>
        <p>This is where the currently selected display will go.</p>

      </body>
    </div>
  );
}

export default App;
