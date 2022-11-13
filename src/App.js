import logo from './logo.svg';
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

        
       
        <h2>Settings</h2>
      
        <div class = "settingButtons">
          <button type="button">Time and Date</button>
          <button type="button">Sound Settings</button>
          <button type="button">AC Settings</button>
          <button type="button">Lights</button>
          <button type="button">Navigation Settings</button>


      
      </div>




        
      
      </body>
    </div>
  );
}

export default App;
