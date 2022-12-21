import logo from './img/logo.jpeg'
import ambulanciaUno from './img/ambulancia1.jpeg'
import ambulanciaDos from './img/ambulancia2.jpeg'
import ambulanciaTres from './img/ambulancia3.jpeg'
import ambulanciaCuatro from './img/ambulancia4.jpeg'
import ambulanciaCinco from './img/ambulancia5.jpeg'

import eventoUno from './img/evento1.jpeg'
import eventoDos from './img/evento2.jpeg'
import eventoTres from './img/evento3.jpeg'
import eventoCuatro from './img/evento4.jpeg'

import videoUno from './img/video1.mp4'

import icono from './img/iconoW.png'

import ReactPlayer from 'react-player'

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
      <div className="slider">
        <h1>Nuestras Ambulancias</h1>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={ambulanciaUno} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ambulanciaDos} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ambulanciaTres} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ambulanciaCuatro} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ambulanciaCinco} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="eventos">
        <h2>Eventos</h2>
        <span>estos han sido algunos de los eventos en los que hemos participado con nuestros servicios</span>
        <div className="imagenes">
          <img src={eventoUno}></img>
          <img src={eventoDos}></img>
          <img src={eventoTres}></img>
          <img src={eventoCuatro}></img>
        </div>
        <h2>Con Videos:</h2>
        <div className="videos">
          <ReactPlayer url={videoUno} controls width='100%' height='80%' />
          <br></br>
          <br></br>
          <ReactPlayer url={videoUno} controls width='100%' height='80%' />
          <br></br>
          <br></br>
          <ReactPlayer url={videoUno} controls width='100%' height='80%' />
        </div>
      </div>
      <div className='contact'>
        <a href='https://api.whatsapp.com/send?phone=573103391442'>Escribenos +57 3103391442</a>
        <img src={icono}></img>
      </div>
      <br></br>
      <br></br>

    </div>
  );
}

export default App;
