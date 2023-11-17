import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Avisos from './components/Avisos'
import GastosComunes from './components/GastosComunes';
import EspaciosComunes from './components/EspaciosComunes';

function App() {
  return (
    <div className="App">
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Avisos />} />
          <Route path="/avisos" element={<Avisos />} />
          <Route path="/gastosComunes" element={<GastosComunes />} />
          <Route path="/espaciosComunes" element={<EspaciosComunes />} />
          <Route path="/espaciosComunes/:horarios" element={<seleccionarHorario />} />
          <Route path="/contact" element={<Avisos />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
