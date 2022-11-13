
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
            <div class="media"> Rewind------Pause-------------------Play------Forward </div>
            <div class="time"> 09:33 PM </div>
          </div>
        </div>


        <div class="sub-navbar">     
              <div class="subbutton"> Apps </div>
              <div class="subbutton"> Interior </div>
              <div class="subbutton"> Alerts </div>
              <div class="subbutton"> Settings </div>
              <div class="subbutton"> Info </div>
        </div>
      </header>


        
      <body>
        <div id="row1">
          
          <div>
            <c> Car Info </c>
            <p> Car Model: Toyota Supra </p>
            <p> Car Year: 2022 </p>
            <p> Car Color: Renaissance Red 2.0 </p>
            <p> Miles per Gallon: 25 MPG </p>
            <p> Mileage: 20,000 miles </p>
            <p> Performance: 255 Horsepower </p>
          </div>
          <img src="./red toyota supra 2022.png" alt=""/>
        </div>

        

        
      </body>
    </div>
  );
}

export default App;
