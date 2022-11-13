
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="navbar">
          <p>This is navbar. Here is where phone, map, bluetooth will go.</p>
        </div>
             
        <div id="subnavbar">
            <div class="button" width="60" height="100"> Apps </div>
            <div class="button" width="60" height="100"> Interior </div>
            <div class="button" width="60" height="100"> Alerts </div>
            <div class="button" width="60" height="100"> Settings </div>
            <div class="button" width="60" height="100"> Info </div>
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
            <p> Performance: 255 </p>
            <p> Horsepower: @ 5,000 - 6,5000 rpm </p>
          </div>
          <img src="./red toyota supra 2022.png" alt=""/>
        </div>

      

        
      </body>
    </div>
  );
}

export default App;
