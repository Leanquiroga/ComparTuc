import React, { useState } from 'react';
import './styleNavbar.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';


export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src={require("../../images/icono.jpg")} alt="" className='iconoLogo' />
          ComparTuc
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav id='navbar'>
            <div className="seccionNavegacion">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-3 textoNavbar">
                  Inicio
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-3 textoNavbar">
                  Contacto
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-3 textoNavbar">
                  Nosotros
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>
            <MDBNavbarItem>
              <MDBInput label="Busca Productos" contrast  labelStyle={{color: 'grey'}}  type="text" className='textoInputNavbar pe-5 mt-1'>
                <i className="fas fa-arrow-circle-right trailing px-2"></i>
              </MDBInput>
            </MDBNavbarItem>

            <MDBNavbarItem>

            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                <MDBIcon far icon="user" className='mx-3'size="lg"/>
              </MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}