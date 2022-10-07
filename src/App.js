import './App.css';
import NavBar from './compoonents/NavBar/NavBar';
import TickerCarousel from './compoonents/TickerCarousel/TickerCarousel';
import Tiles from './compoonents/Tiles/Tiles';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TickerCarousel />
      <Tiles />
    </div>
  );
}

export default App;
