
import './App.css';
import { BusquedaPaciente } from './components/buscar-paciente/BusquedaPaciente';
import { Valoracion } from './components/etapas/Valoracion/Valoracion';
import { Diagnostico } from './components/etapas/Diagnostico/Diagnostico';
import { Evolucion } from "./components/evolucion/Evolucion";
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Planeacion } from './components/etapas/Planeacion/Planeacion';
import { Ejecucion } from './components/etapas/Ejecucion/Ejecucion';
import { Evaluacion } from './components/etapas/Evaluacion/Evaluacion';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { FinalizarEvolucion } from './components/evolucion/finalizar/FinalizarEvolucion';
import { EjecutarAcciones } from './components/etapas/Ejecucion/EjecutarAcciones';
import Registro from './components/registro-paciente/Registro';
import { Home } from './components/home/Home';
import { PantallaNoDisponible } from './components/PantallaNoDisponible';
import { Borrador } from './components/evolucion/borrador/Borrador';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter >
          <Route exact path="/evolucion/paciente" element={<BusquedaPaciente />} />
          <Route exact path='/registro-paciente' element={<Registro />} />
          <Route exact path="/evolucion" element={<Evolucion />} />
          <Route exact path='/evolucion/valoracion' element={<Valoracion />} />
          <Route exact path='/evolucion/diagnostico' element={<Diagnostico />} />
          <Route exact path='/evolucion/planeacion' element={<Planeacion />} />
          <Route exact path='/evolucion/ejecucion' element={<Ejecucion />} />
          <Route exact path='/evolucion/evaluacion' element={<Evaluacion />} />
          <Route exact path="/evoluciones-anteriores" element={<PantallaNoDisponible seccion={2} />} />
          <Route exact path='/evolucion/borrador' element={<Borrador />} />
          <Route exact path='/evolucion/finalizar' element={<FinalizarEvolucion />} />
          <Route exact path='/evolucion/ejecucion/acciones' element={<EjecutarAcciones />} />
          <Route exact path='/' element={<Home />} />
        </HashRouter>
      </Provider>
    </div>
  );
}
export default App;

