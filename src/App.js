import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Avisos from './components/Avisos'
import GastosComunes from './components/GastosComunes';
import EspaciosComunes from './components/EspaciosComunes';
import SeleccionarHorario from './components/seleccionarHorarios';

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
          <Route path="/espaciosComunes/:horarios" element={<SeleccionarHorario />} />
          <Route path="/contact" element={<Avisos />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
