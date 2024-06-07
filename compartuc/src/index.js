import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Boton, BotonRounded, BotonOutline, BotonOutlineRounded } from './componentes/botones/botones';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Carrousel } from './componentes/carrousel/carrousel.jsx';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CarrouselProd } from "./componentes/carrouselProd/carrouselProd.jsx";
import { CardProducto	 } from './componentes/cardProducto/cardProducto.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardProducto nombre="Zapatillas nike" precio="100000" descuento={20} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
