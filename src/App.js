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
        /* changes isActive state to respond to click */
        setIsActive(current => !current)
      
        /* DEBUGGING */
        console.log(e.currentTarget.id)
        console.log(isActive)
      
        /* compares id of seat clicked to select correct colors */
        /* DRIVER */
      if (e.currentTarget.id === "driver" && isActive){
        if(e.currentTarget.src === "https://cdn-icons-png.flaticon.com/512/5102/5102816.png"){
          e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102957.png"
        } else {
          e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102816.png"
        }
      } else if (e.currentTarget.id === "driver") {
        e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102957.png"
      
        /* PASSENGER */
      } else if (e.currentTarget.id === "passenger" && isActive){
        if(e.currentTarget.src === "https://cdn-icons-png.flaticon.com/512/5102/5102816.png"){
          e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102957.png"
        } else {
          e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102816.png"
        }
      } else if (e.currentTarget.id === "passenger") {
        e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102957.png"
        /* backseat passenger top */
      } else if (e.currentTarget.id === "back-seat-1" && isActive){
        if(e.currentTarget.src === "https://cdn-icons-png.flaticon.com/512/5102/5102816.png"){
          e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102957.png"
        } else {
          e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102816.png"
        }
      } else if (e.currentTarget.id === "back-seat-1") {
        e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102957.png"
      
        /* backseat passenger btm */
        } else if (e.currentTarget.id === "back-seat-2" && isActive){
          if(e.currentTarget.src === "https://cdn-icons-png.flaticon.com/512/5102/5102816.png"){
            e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102957.png"
          } else {
            e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/5102/5102816.png"
          }
        } else if (e.currentTarget.id === "back-seat-2") {
          e.currentTarget.src = "./buckle-up-warning.png"

          // Driver door lock and unlocked icon
        } else if (e.currentTarget.id === "driver-door" && isActive){
          if(e.currentTarget.src === "./locked-symbol.png"){
            e.currentTarget.src = "./unlocked-warning.png"
          } else {
            e.currentTarget.src = "./locked-symbol.png"
          }
        } else if(e.currentTarget.id === "driver-door"){
          e.currentTarget.src = "./unlocked-warning.png";
        
        // Passenger door lock and unlocked icon
        } else if (e.currentTarget.id === "passenger-door" && isActive){
            if(e.currentTarget.src === "./locked-symbol.png"){
              e.currentTarget.src = "./unlocked-warning.png"
            } else {
              e.currentTarget.src = "./locked-symbol.png"
            }
        } else if(e.currentTarget.id === "passenger-door"){
            e.currentTarget.src = "./unlocked-warning.png";
        
        // Top back door lock and unlocked icon
        } else if (e.currentTarget.id === "back-seat-1-door" && isActive){
          if(e.currentTarget.src === "./locked-symbol.png"){
            e.currentTarget.src = "./unlocked-warning.png"
          } else {
            e.currentTarget.src = "./locked-symbol.png"
          }
        } else if(e.currentTarget.id === "back-seat-1-door"){
            e.currentTarget.src = "./unlocked-warning.png";
        
        // Btm back door lock and unlocked icon
        } else if (e.currentTarget.id === "back-seat-2-door" && isActive){
          if(e.currentTarget.src === "./locked-symbol.png"){
            e.currentTarget.src = "./unlocked-warning.png"
          } else {
            e.currentTarget.src = "./locked-symbol.png"
          }
        } else if(e.currentTarget.id === "back-seat-2-door"){
            e.currentTarget.src = "./unlocked-warning.png";
        
        // Trunk weight indicator
        } else if (e.currentTarget.id === "trunk" && isActive){
          if(e.currentTarget.style.backgroundColor === "rgb(195, 195, 195)"){
            e.currentTarget.style.backgroundColor = "black"
            e.currentTarget.style.color = "white"
            console.log(e.currentTarget.style.color)
          } else {
            e.currentTarget.style.backgroundColor = "rgb(195, 195, 195)"
            e.currentTarget.style.color = "black"
          }
        } else if(e.currentTarget.id === "trunk"){
            e.currentTarget.style.backgroundColor = "rgb(195, 195, 195)";
            e.currentTarget.style.color = "black"
        }
    };


  return (
    <div className="App">
      <header className="App-header">

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,200" />
        
        <div class="navbar">
          <p>WELCOME</p>
        </div>
      </header>

      <body>
        <div class="side-bar col-6">
          <img id="map-img" src="./map-screenshot.jpg"/>

          <div class="media-player">
            <img id="media-player-album-cover" src="https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png"/>
            <p>ADELE SONG - BY ADELE</p>
          </div> 
        </div>

        

        <div class="interior-map">
          <div class="front-seats col-3">
            <img id="passenger-door" src="./locked-symbol.png" onClick={handleClick}/>
            <br/>
            <img id="driver" src="https://cdn-icons-png.flaticon.com/512/5102/5102957.png" alt="car seat image" onClick={handleClick}/>
            <br/>
            <img id="passenger" src="https://cdn-icons-png.flaticon.com/512/5102/5102957.png" alt="car seat image" onClick={handleClick} />
            <br/>
            <img id="driver-door" src="./locked-symbol.png" onClick={handleClick}/>
          </div>

          <div class="back-seats col-3">
            <img id="back-seat-1-door" src="./locked-symbol.png" onClick={handleClick}/>
            <br/>
            <img id="back-seat-1" src="https://cdn-icons-png.flaticon.com/512/5102/5102957.png" alt="car seat image" onClick={handleClick}/>
            <br/>
            <img id="back-seat-2" src="./buckle-up-warning.png" alt="car seat image" onClick={handleClick} />
            <br/>
            <img id="back-seat-2-door" src="./locked-symbol.png" onClick={handleClick}/>
          </div>
          
          <div class="trunk col-3" id="trunk" onClick={handleClick}>
            <p>trunk: empty</p>
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
