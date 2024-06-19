// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Boton, BotonRounded, BotonOutline, BotonOutlineRounded } from './componentes/botones/botones';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Carrousel } from './componentes/carrousel/carrousel.jsx';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CarrouselProd } from "./componentes/carrouselProd/carrouselProd.jsx";
import { CardProducto } from './componentes/cardProducto/cardProducto.jsx';
import Signup from './componentes/signup/signup.js';
import Login from './componentes/login/login.js';
import { Footer } from './componentes/footer/footer.jsx'
import { Navbar, NavbarContacto, NavbarNosotros, NavbarMiCuenta } from './componentes/navbar/navbar.jsx'
import { Header } from './componentes/header/header.jsx'
import { IndexPages } from './pages/index/indexPages.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexPages />
  </React.StrictMode>
);

reportWebVitals();