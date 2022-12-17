import logo from './img/logo.jpeg'
import ambulanciaUno from './img/ambulancia1.jpeg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="texto">
          <h1>Servicio de ambulancias particulares</h1>
          <span>Somos un servicio de ambulancias particulares, las cuales brindan servicios de emergencia o entretenimiento
            a distintos tipos de eventos a nivel nacional
          </span>
        </div>
        <div className="logo">
          <img src={logo}></img>
        </div>
      </header>
      <div className="introduction">
        <div className="ambulancia">
          <img src={ambulanciaUno}></img>
        </div>
        <div className="text-introduction">
          <h1>Que todos estén protegidos ¡es nuestra misión!</h1>
          <br></br>
          <span>Es un servicio diseñado para proteger a todos los empleados, clientes, proveedores
            y visitantes ante cualquier situación de riesgo, dentro de un área específica, brindando
            atención pre-hospitalaria de emergencia y urgencia las 24 horas del día, los 365 días del año.</span>
        </div>
      </div>
      <div className="cards">
        <div className="card-one">
          <h3>Atención segura y ágil</h3>
          <span>a través de nuestra central de referencia, por medio de una línea telefónica exclusiva
           asignada a la empresa.</span>
        </div>
        <div className="card-two">
          <h3>Personal capacitado en APH</h3>
          <span>entrenado en el cumplimiento de la Resolución 0705 del 2007.</span>
        </div>
        <div className="card-one">
          <h3>Traslado en ambulancia</h3>
          <span>básica o medicalizada para los pacientes, 
            que a necesidad del área usuaria y que con base en el 
            Triage Prehospitalario lo requieran.</span>
        </div>
        <div className="card-two">
          <h3>Teleorientación</h3>
          <span>atendida por el personal específicamente preparado para brindar información,
             asesoría y acompañamiento a los pacientes.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
