import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages & Components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Map from './pages/Map';
//CSS files
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
