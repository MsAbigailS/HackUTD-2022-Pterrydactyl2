
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="navbar">
          <p>This is navbar. Here is where phone, map, bluetooth will go.</p>
        </div>

        <div class="sub-navbar">
          <p>This is where apps, mapping, notices buttons will go</p>
        </div>
      </header>

      

      <body>
        <div id="row1">  
          <span>
          <img src="./issues_images/engtempwarning.jpg" alt=""/>
          <p id="anything">your issue is you suck</p>
          <a href="https://www.toyotaguru.us/yaris-manual-2/engine-coolant-temperature-indicator-and-warning-light.html"><code>(solution)</code> </a>
          </span>
        </div>


        <div id="row2">  
        <span>
        <img src="./issues_images/batterycharge.webp" alt=""/>
          <p id="anything">your issue is you suck</p>
          <a href="https://www.baierltoyota.com/blog/what-does-the-red-battery-light-in-your-toyota-mean/">solution </a>
          </span>
        </div>

        <div id="row3">  
        <span>
           <img src="./issues_images/oilpressure.webp" alt=""/>
          <p id="anything">your issue is you suck</p>
          <a href="https://support.toyota.com/s/article/How-often-should-I-ma-10042?language=en_US">solution </a>
        </span>
       
        </div>

      </body>
    </div>
  );
}

export default App;
