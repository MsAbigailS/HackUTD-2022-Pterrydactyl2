/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';
import CarSeat from './CarSeat';
import { useState } from 'react';

function App() {

      /* Creating states for seat clicks */
      const [isActive, setIsActive] = useState(false);

      /* When clicked, toggle state */
      const handleClick = e => {
      setIsActive(current => !current)
      console.log(e.currentTarget.id)
      console.log(isActive)
      if(e.currentTarget.id === "driver" && isActive){
        if(e.currentTarget.style.background === "red"){
          e.currentTarget.style.background = "blue"
        } else {
          e.currentTarget.style.background = "red"
        }
      } else {
        e.currentTarget.style.background = "red"
      }
      
    };


  return (
    <div className="App">
      <header className="App-header">

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,200" />
        
        <div class="navbar">
          <button type="button" class="col-2" id="gps-button">
            <i class="material-symbols-rounded">explore</i>
          </button>
          <button type="button" class="col-2" id="bluetooth-button" >
            <i class="material-symbols-rounded">bluetooth</i>
          </button>
        </div>
        <div class="col-5 media-player-navigation">
            <button type="button" id="previous-media-button">
              <i class="material-symbols-rounded">arrow_back_ios</i>
            </button>
            <p>Current Song - Current Artist...</p>
            <button type="button" id="next_media_button">
              <i class="material-symbols-rounded">arrow_forward_ios</i>
            </button>
          
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

        <div class="interior-map">
          <div class="front-seats col-4">
            <img id="driver" src="https://static.thenounproject.com/png/4939260-200.png" alt="car seat image"
              
              onClick={handleClick}
            />
          </div>
          
        </div>



      <h1> TESTING CARSEAT </h1>


      <h1>
        jfeiowajf
      </h1>

      </body>
    </div>
  );
}

export default App;
