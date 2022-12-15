import logo from './img/logo.jpeg'
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
    </div>
  );
}

export default App;
