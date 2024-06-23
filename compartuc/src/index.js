import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Boton,
  BotonRounded,
  BotonOutline,
  BotonOutlineRounded,
} from "./componentes/botones/botones";
import "swiper/css";
import "swiper/css/scrollbar";
import { Carrousel } from "./componentes/carrousel/carrousel.jsx";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarrouselProd } from "./componentes/carrouselProd/carrouselProd.jsx";
import { CardProducto } from "./componentes/cardProducto/cardProducto.jsx";
import { Signup } from "./componentes/signup/signup.jsx";
import { Login } from "./componentes/login/login.jsx";
import { Footer } from "./componentes/footer/footer.jsx";
import {
  Navbar,
  NavbarContacto,
  NavbarNosotros,
  NavbarMiCuenta,
} from "./componentes/navbar/navbar.jsx";
import { Header } from "./componentes/header/header.jsx";
import { IndexPages } from "./pages/index/indexPages.jsx";
import { LoginPages } from "./pages/login/loginPages.jsx";
import { SignupPages } from "./pages/signup/signupPages.jsx";
import { NosotrosPages } from "./pages/nosotros/nosotrosPages.jsx";
import { Error404Pages } from "./pages/errorPage/errorPage404.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<IndexPages />} />
          <Route exact path="*" element={<Error404Pages />} />
          <Route exact path="/login" element={<LoginPages />} />
          <Route exact path="/signup" element={<SignupPages />} />
          <Route exact path="/nosotros" element={<NosotrosPages />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
