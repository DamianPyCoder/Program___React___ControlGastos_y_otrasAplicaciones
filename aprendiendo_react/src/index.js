import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
import ContadorFuncional from './componentes/ContadorFuncional';
import './index.css';
import Boton from './elementos/Boton';
import EjemploUseReducer from './componentes/EjemploUseReducer';
import Blog from './componentes/Blog';

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true);

  return (
    <div className="contenedor">
      {sesion === true ?
      <div>
        <Usuario />
        <Blog />
        <EjemploUseReducer />
        {/* <ContadorFuncional cantidadAIncrementar={100} cantidadADisminuir={20} /> */}
        {/* <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</button> */}
        <Boton largo marginTop onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</Boton>
      </div>
      :
      <div>
        <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
        
        {/* 
        <button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesion</button>
        */}

      </div>
      }
    </div>
  );
};

ReactDOM.render(<App />,document.getElementById('root'));