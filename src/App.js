
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="navbar">
    
          <p>This is navbar. Here is where phone, map, bluetooth will go.</p>
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
          <span>
          <img src="./issues_images/eng_temp_warning_ligth.png" alt=""/>
          <p id="anything"> Engine temperature has exceeded normal limits. </p>
          <div class="linkbutton">
          <a href="https://www.toyotaguru.us/yaris-manual-2/engine-coolant-temperature-indicator-and-warning-light.html"> solution </a>
          </div>
          </span>
        </div>
        <span class="line"></span>

        <div id="row2">  
        <span>
        <img src="./issues_images/battery_charge_light.png" alt=""/>
          <p id="anything"> <code>Car’s charging system is short of power or is not charging properly.</code> </p>
          <div class="linkbutton">
          <a href="https://www.baierltoyota.com/blog/what-does-the-red-battery-light-in-your-toyota-mean/">solution </a>
          </div>
          </span>
          
        </div>
<span class="line"></span>
        <div id="row3" >  
        <span>
        <img src="./issues_images/oil_pressure_light.png" alt=""/>
          <p id="anything"> Loss of oil pressure. Lubrication is low or lost completely.</p>
          <div class="linkbutton">
          <a href="https://support.toyota.com/s/article/How-often-should-I-ma-10042?language=en_US">solution </a>
          </div>
          </span>
       
        </div>

      </body>
    </div>
  );
}

export default App;
