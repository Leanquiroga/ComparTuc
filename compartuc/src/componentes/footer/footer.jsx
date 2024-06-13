import React from 'react';
import './styleFooter.css';
// import styled from 'styled-components';
import { MDBContainer, MDBFooter, MDBIcon, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter className='footer'>
      <MDBContainer>
        <MDBContainer>
          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-2 p-5">
                <h5 className="tituloCol"><b>Nostros</b></h5>
                <ul className="list-unstyled mb-0 contenedorColFooter">
                  <li>
                    <a href="#!" className="textoFooterCol">Av. Santiago del Estero 1304,Tucuman, Argentina</a>
                  </li>
                  <li>
                    <a href="#!" className="textoFooterCol">compartuc@gmail.com</a>
                  </li>
                  <li>
                    <a href="#!" className="textoFooterCol">+381-574-4224</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 p-5">
                <h5 className="tituloCol"><b>Cuenta</b></h5>
                <ul className="list-unstyled mb-0 contenedorColFooter">
                  <li>
                    <a href="#!" className="textoFooterCol">Login/Register</a>
                  </li>
                  <li>
                    <a href="#!" className="textoFooterCol">Cartera</a>
                  </li>
                  <li>
                    <a href="#!" className="textoFooterCol">Comprar</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 p-5">
                <h5 className="tituloCol"><b>Soporte</b></h5>
                <ul className="list-unstyled mb-0 contenedorColFooter">
                  <li>
                    <a href="#!" className="textoFooterCol">Politicas de Privacidad</a>
                  </li>
                  <li>
                    <a href="#!" className="textoFooterCol">Terminos de Uso</a>
                  </li>
                  <li>
                    <a href="#!" className="textoFooterCol">Contacto</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 p-5">
                <h5 className="tituloCol"><b>Ofertas Exclusivas</b></h5>
                <ul className="list-unstyled mb-0 contenedorColFooter">
                  <li>
                    <a href="#!" className="textoFooterCol">Queres recibir Ofertas unicas!</a>
                  </li>
                  <li>
                    <MDBInput label="Ingrese su Email" id="formWhite" contrast type="text" className='textoInput pe-5 mt-1'>
                      <i className="fas fa-arrow-circle-right trailing px-2"></i>
                    </MDBInput>
                  </li>
                </ul>
              </div>
            </div>



          </section>
        </MDBContainer>
        <hr />
        <div className="contenedorFooter row">
          <div className="col-5">
            © 2024 Company, Inc. All rights reserved.
            <br />©ComparTuc.com Copyright
          </div>


          <section className="mb-4 col-lg-5 col-sm-7">
            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
            <MDBBtn className='m-1' style={{ backgroundColor: 'black' }}>
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </div>

      </MDBContainer>
    </MDBFooter >

  );
};

