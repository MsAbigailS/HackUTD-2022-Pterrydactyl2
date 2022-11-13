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
          <p>This is where apps, mapping, notices buttons will go</p>
        </div>
      </header>

      <body>
        <p>This is where the currently selected display will go.</p>
       
        <div class ="buttons">
          <input  type="image"  class="col-6" name="<Phone>" src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png" border="border of the image" alt="text"></input>
          <input  type="image"  class="col-6" name="<Maps>" src="https://logos-download.com/wp-content/uploads/2016/05/Google_Maps_logo_icon.png" border="border of the image" alt="text"></input>
          <input  type="image"  class="col-6" name="<Spotify>" src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" border="border of the image" alt="text"></input>
          <input  type="image"  class="col-6" name="<Settings>" src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png" border="border of the image" alt="text"></input>
          <input  type="image"  class="col-6" name="<Radio>" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFazZ21dBNQjos8fw3wXhL23GLG7A7dwJpQ&usqp=CAU" border="border of the image" alt="text"></input>
          <input  type="image"  class="col-6" name="<Info>" src="https://seeklogo.com/images/I/information-desk-symbol-logo-871156055D-seeklogo.com.png" border="border of the image" alt="text"></input>

          
          
        </div>

        
      
      </body>
    </div>
  );
}

export default App;
