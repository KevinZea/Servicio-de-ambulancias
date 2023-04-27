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

import videoUno from './img/videos/videoUno.mp4'

import icono from './img/iconoW.png'
import iconoS from './img/iconoS.png'

import cardOne from './img/cardOne.jpg'
import cardTwo from './img/cardTwo.jpg'
import cardTre from './img/card3.jpg'
import cardF from './img/card4.jpg'

import ReactPlayer from 'react-player'

import './App.css';

function App() {
  return (
    <div className="App">


      <header className="header">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="texto">
          <h1>SERVICIO DE AMBULANCIAS PARTICULARES</h1>
          <h2>AYUDAR</h2>
        </div>
      </header>


      <div className='intro'>
        <h2>Somos un servicio de ambulancias particulares, las cuales brindan servicios de emergencia o entretenimiento
          a distintos tipos de eventos a nivel nacional</h2>
      </div>


      <div className="ambulancia">
        <img src={ambulanciaUno}></img>
      </div>


      <div className="introduction">
        <div className='saludIntroduction'>
          <img src={iconoS}></img>
        </div>
        <br></br>
        <div className="text-introduction">
          <h1>Que todos estén protegidos ¡es nuestra misión!</h1>
          <br></br>
          <span>Es un servicio diseñado para proteger a todos los empleados, clientes, proveedores
            y visitantes ante cualquier situación de riesgo, dentro de un área específica, brindando
            atención pre-hospitalaria de emergencia y urgencia las 24 horas del día, los 365 días del año.
          </span>
          <br></br>
          <div className='contactWhatsapp'>
            <a href='https://api.whatsapp.com/send?phone=573103391442' target='_blank'>Escribenos
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          </div>
        </div>
      </div>


      <div className="cards">
        <div className="card-one">
          <div className='imageCard'>
            <img src={cardOne}></img>
          </div>
          <h3>Atención segura y ágil</h3>
          <span>a través de nuestra central de referencia, por medio de una línea telefónica exclusiva
            asignada a la empresa.</span>
          <br></br>
          <br></br>
          <div className='contactWhatsapp'>
            <a href='https://api.whatsapp.com/send?phone=573103391442' target='_blank'>Escribenos
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="card-two">
          <div className='imageCard'>
            <img src={cardTwo}></img>
          </div>
          <h3>Personal capacitado en APH</h3>
          <span>entrenado en el cumplimiento de la Resolución 0705 del 2007.</span>
          <br></br>
          <br></br>
          <div className='contactWhatsapp'>
            <a href='https://api.whatsapp.com/send?phone=573103391442' target='_blank'>Escribenos
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="card-one">
          <div className='imageCard'>
            <img src={cardTre}></img>
          </div>
          <h3>Traslado en ambulancia</h3>
          <span>básica o medicalizada para los pacientes,
            que a necesidad del área usuaria y que con base en el
            Triage Prehospitalario lo requieran.</span>
          <br></br>
          <br></br>
          <div className='contactWhatsapp'>
            <a href='https://api.whatsapp.com/send?phone=573103391442' target='_blank'>Escribenos
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="card-two">
          <div className='imageCard'>
            <img src={cardF}></img>
          </div>
          <h3>Teleorientación</h3>
          <span>atendida por el personal específicamente preparado para brindar información,
            asesoría y acompañamiento a los pacientes.</span>
          <br />
          <br></br>
          <div className='contactWhatsapp'>
            <a href='https://api.whatsapp.com/send?phone=573103391442' target='_blank'>Escribenos
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          </div>
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
          <video controls name="media">
            <source src={videoUno} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className='contact'>
        <a href='https://api.whatsapp.com/send?phone=573103391442'>Escribenos +57 3103391442</a>
        <img src={icono}></img>
      </div>
      <br></br>
      <div className='correo'>
        <span>ambulanciasparticulares1975@gmail.com</span>
      </div>
      <br></br>
      <br></br>

    </div>
  );
}

export default App;
