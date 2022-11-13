
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';

import './App.css';
import CarSeat from './CarSeat';
import { useState } from 'react';

function App() {

      /* Creating states for seat clicks */
      // DEBUG
      // const [isActive, setIsActive] = useState(false); 
      const [isActive, setIsActive] = useState(true); 

      /* When clicked, toggle state */
      const handleClick = e => {
        /* changes isActive state to respond to click */
        setIsActive(current => !current)
      
        /* DEBUGGING */
        console.log(e.currentTarget.id)
        console.log(isActive)

        // Jesus app section
        if(e.currentTarget.id === "jesus-section" && isActive){
          if(document.getElementById("jesus-code").style.visibility === "visible"){
            document.getElementById("jesus-code").style.visibility = "hidden";
            document.getElementById("jesus-code").style.height = "0vh"; 
          } else {
            document.getElementById("jesus-code").style.visibility = "visible";
            document.getElementById("jesus-code").style.height = "100vh"; 
            document.getElementById("interior-code").style.visibility = "hidden";
            document.getElementById("interior-code").style.height = "0vh"; 
            document.getElementById("elysa-code").style.visibility = "hidden";
            document.getElementById("elysa-code").style.height = "0vh"; 
            document.getElementById("damian-code").style.visibility = "hidden";
            document.getElementById("damian-code").style.height = "0vh"; 
            document.getElementById("jesus-code-2").style.visibility = "hidden";
            document.getElementById("jesus-code-2").style.height = "0vh"; 
          }
        }

        // Interior section
        if(e.currentTarget.id === "interior-section" && isActive){
          if(document.getElementById("interior-code").style.visibility === "visible"){
            document.getElementById("interior-code").style.visibility = "hidden";
            document.getElementById("interior-code").style.height = "0vh"; 
          } else {
            document.getElementById("interior-code").style.visibility = "visible";
            document.getElementById("interior-code").style.height = "100vh"; 
            document.getElementById("jesus-code").style.visibility = "hidden";
            document.getElementById("jesus-code").style.height = "0vh"; 
            document.getElementById("elysa-code").style.visibility = "hidden";
            document.getElementById("elysa-code").style.height = "0vh"; 
            document.getElementById("damian-code").style.visibility = "hidden";
            document.getElementById("damian-code").style.height = "0vh"; 
            document.getElementById("jesus-code-2").style.visibility = "hidden";
            document.getElementById("jesus-code-2").style.height = "0vh"; 

          }
        }

        // Settings section
        if(e.currentTarget.id === "jesus-section-2" && isActive){
          if(document.getElementById("jesus-code-2").style.visibility === "visible"){
            document.getElementById("jesus-code-2").style.visibility = "hidden";
            document.getElementById("jesus-code-2").style.height = "0vh"; 
          } else {
            document.getElementById("jesus-code-2").style.visibility = "visible";
            document.getElementById("jesus-code-2").style.height = "100vh"; 
            document.getElementById("interior-code").style.visibility = "hidden";
            document.getElementById("interior-code").style.height = "0vh"; 
            document.getElementById("elysa-code").style.visibility = "hidden";
            document.getElementById("elysa-code").style.height = "0vh"; 
            document.getElementById("damian-code").style.visibility = "hidden";
            document.getElementById("damian-code").style.height = "0vh"; 
            document.getElementById("jesus-code").style.visibility = "hidden";
            document.getElementById("jesus-code").style.height = "0vh"; 
          }
        }
        // Alerts sections
        if(e.currentTarget.id === "damian-section" && isActive){
          if(document.getElementById("damian-code").style.visibility === "visible"){
            document.getElementById("damian-code").style.visibility = "hidden";
            document.getElementById("damian-code").style.height = "0vh"; 
          } else {
            document.getElementById("damian-code").style.visibility = "visible";
            document.getElementById("damian-code").style.height = "100vh"; 
          }
        }

        // Info Section
        if(e.currentTarget.id === "elysa-section" && isActive){
          if(document.getElementById("elysa-code").style.visibility === "visible"){
            document.getElementById("elysa-code").style.visibility = "hidden";
            document.getElementById("elysa-code").style.height = "0vh"; 
          } else {
            document.getElementById("elysa-code").style.visibility = "visible";
            document.getElementById("elysa-code").style.height = "100vh";
            document.getElementById("interior-code").style.visibility = "hidden";
            document.getElementById("interior-code").style.height = "0vh"; 
            document.getElementById("jesus-code").style.visibility = "hidden";
            document.getElementById("jesus-code").style.height = "0vh"; 
            document.getElementById("damian-code").style.visibility = "hidden";
            document.getElementById("damian-code").style.height = "0vh"; 
            document.getElementById("jesus-code-2").style.visibility = "hidden";
            document.getElementById("jesus-code-2").style.height = "0vh";  
          }
        }

       // Alerts sections
       if(e.currentTarget.id === "damian-section" && isActive){
        if(document.getElementById("damian-code").style.visibility === "visible"){
          document.getElementById("damian-code").style.visibility = "hidden";
          document.getElementById("damian-code").style.height = "0vh"; 
        } else {
          document.getElementById("damian-code").style.visibility = "visible";
          document.getElementById("damian-code").style.height = "100vh"; 
          document.getElementById("interior-code").style.visibility = "hidden";
          document.getElementById("interior-code").style.height = "0vh"; 
          document.getElementById("jesus-code").style.visibility = "hidden";
          document.getElementById("jesus-code").style.height = "0vh"; 
          document.getElementById("elysa-code").style.visibility = "hidden";
          document.getElementById("elysa-code").style.height = "0vh"; 
          document.getElementById("jesus-code-2").style.visibility = "hidden";
          document.getElementById("jesus-code-2").style.height = "0vh";  
        }
      }

      
        /* compares id of seat clicked to select correct colors */
        /* PASSENGER */
      if (e.currentTarget.id === "passenger" && isActive){
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
            e.currentTarget.style.backgroundColor = "grey"
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
          <div class="nav">
            <div class="navbutton"> 
              <div><img src="phone.png" className = "phone"/></div> 
            </div>
            <div class="navbutton"> 
              <div> <img src="maps.png" className = "maps"/> </div>
            </div>
            <div class="navbutton"> 
              <div> <img src="bluetooth.png" className = "bluetooth"/> </div>
            </div>
            <img class="media" src="./mediapic.png"></img>
            {/* <div class="media"> Rewind------Pause-------------------Play------Forward </div> */}
            <div class="time"> 09:33 PM </div>
          </div>
      </div>
             
        <div id="subnavbar">
            <div id="jesus-section" class="button" width="60" height="100" onClick={handleClick}> Apps </div>
            <div id="interior-section" class="button" width="60" height="100" onClick={handleClick}> Interior </div>
            <div id="damian-section" class="button" width="60" height="100" onClick={handleClick}> Alerts </div>
            <div id="jesus-section-2" class="button" width="60" height="100" onClick={handleClick}> Settings </div>
            <div id="elysa-section" class="button" width="60" height="100" onClick={handleClick}> Info </div>
        </div>

      </header>


        
      <body>

        <div id="elysa-code" class="elysa">
          <div id="row1">
            <div>
              <c> Car Info </c>
              <p> Car Model: Toyota Supra </p>
              <p> Car Year: 2022 </p>
              <p> Car Color: Renaissance Red 2.0 </p>
              <p> Miles per Gallon: 25 MPG </p>
              <p> Mileage: 20,000 miles </p>
              <p> Performance: 255 </p>
              <p> Horsepower: @ 5,000 - 6,5000 rpm </p>
            </div>
            <img src="/red toyota supra 2022.png" alt="car-img"/>
          </div>
        </div>

        <div id="damian-code" class="damian">
          <div id="row1-d">  
            <span>
            <img src="./issues_images/eng_temp_warning_ligth.png" alt=""/>
            <p id="anything"> Engine temperature has exceeded normal limits. </p>
            <div class="linkbutton">
              <a href="https://www.toyotaguru.us/yaris-manual-2/engine-coolant-temperature-indicator-and-warning-light.html"> solution </a>
            </div>
            </span>
          </div>

          <span class="line"></span>

          <div id="row2-d">  
            <span>
            <img src="./issues_images/battery_charge_light.png" alt=""/>
              <p id="anything"> Car charging system is short of power or is not charging properly.</p>
              <div class="linkbutton">
                <a href="https://www.baierltoyota.com/blog/what-does-the-red-battery-light-in-your-toyota-mean/">solution </a>
              </div>
            </span>
          </div>

          <span class="line"></span>
          
          <div id="row3-d" >  
            <span>
              <img src="./issues_images/oil_pressure_light.png" alt=""/>
              <p id="anything"> Loss of oil pressure. Lubrication is low or lost completely.</p>
              <div class="linkbutton">
                <a href="https://support.toyota.com/s/article/How-often-should-I-ma-10042?language=en_US">solution </a>
              </div>
            </span>
          </div>

        </div>

        <div id="jesus-code" className="jesus">
          <div class ="buttons">
            <input  type="image"  class="col-6" name="<Phone>" src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png" border="border of the image" alt="text"></input>
            <input  type="image"  class="col-6" name="<Maps>" src="https://logos-download.com/wp-content/uploads/2016/05/Google_Maps_logo_icon.png" border="border of the image" alt="text"></input>
            <input  type="image"  class="col-6" name="<Spotify>" src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" border="border of the image" alt="text"></input>
            <input  type="image"  class="col-6" name="<Settings>" src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png" border="border of the image" alt="text"></input>
            <input  type="image"  class="col-6" name="<Radio>" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFazZ21dBNQjos8fw3wXhL23GLG7A7dwJpQ&usqp=CAU" border="border of the image" alt="text"></input>
            <input  type="image"  class="col-6" name="<Info>" src="https://seeklogo.com/images/I/information-desk-symbol-logo-871156055D-seeklogo.com.png" border="border of the image" alt="text"></input>
          </div>
        </div>

        <div id="jesus-code-2" class="jesus-settings">
          <h2>Settings</h2>
          <div class = "settingButtons">
            <button type="button">Time and Date</button>
            <button type="button">Sound Settings</button>
            <button type="button">AC Settings</button>
            <button type="button">Lights</button>
            <button type="button">Navigation Settings</button>
          </div>
        </div>

        <div id="interior-code" class="interior-map">
          <div class="front-seats col-3">
            <img id="passenger-door" src="./locked-symbol.png" onClick={handleClick}/>
            <br/>
            <img id="passenger" src="https://cdn-icons-png.flaticon.com/512/5102/5102957.png" alt="car seat image" onClick={handleClick} />
            <br/>
            <img id="driver" src="https://cdn-icons-png.flaticon.com/512/2/2087.png" alt="car seat image" onClick={handleClick}/>
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
