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

export function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='shadow-0 navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src={require("../../images/icono.jpg")} alt="" className='iconoLogo' />
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
          <MDBNavbarNav>
            <div className="seccionNavegacion">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar borderBtn">
                  Inicio
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Contacto
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Nosotros
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Mi cuenta
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>

            <div className="seccionInput">
              <MDBNavbarItem>
                <MDBInput label="Busca Productos" contrast labelStyle={{ color: 'grey' }} type="text" className='textoInputNavbar pe-5 mt-1'>
                  <i className="fas fa-magnifying-glass trailing px-2"></i>
                </MDBInput>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  <MDBIcon far icon="heart mt-3 ms-3" size="lg" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  <MDBIcon fas icon="shopping-cart mt-3 ms-3" size='lg' />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export function NavbarNosotros() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='shadow-0 navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src={require("../../images/icono.jpg")} alt="" className='iconoLogo' />
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
          <MDBNavbarNav>
            <div className="seccionNavegacion">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Inicio
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Contacto
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar borderBtn">
                  Nosotros
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Mi cuenta
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>

            <div className="seccionInput">
              <MDBNavbarItem>
                <MDBInput label="Busca Productos" contrast labelStyle={{ color: 'grey' }} type="text" className='textoInputNavbar pe-5 mt-1'>
                  <i className="fas fa-magnifying-glass trailing px-2"></i>
                </MDBInput>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  <MDBIcon far icon="heart mt-3 ms-3" size="lg" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  <MDBIcon fas icon="shopping-cart mt-3 ms-3" size='lg' />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export function NavbarContacto() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='shadow-0 navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src={require("../../images/icono.jpg")} alt="" className='iconoLogo' />
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
          <MDBNavbarNav>
            <div className="seccionNavegacion">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Inicio
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar borderBtn">
                  Contacto
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Nosotros
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Mi cuenta
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>

            <div className="seccionInput">
              <MDBNavbarItem>
                <MDBInput label="Busca Productos" contrast labelStyle={{ color: 'grey' }} type="text" className='textoInputNavbar pe-5 mt-1'>
                  <i className="fas fa-magnifying-glass trailing px-2"></i>
                </MDBInput>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  <MDBIcon far icon="heart mt-3 ms-3" size="lg" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  <MDBIcon fas icon="shopping-cart mt-3 ms-3" size='lg' />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export function NavbarMiCuenta() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='shadow-0 navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src={require("../../images/icono.jpg")} alt="" className='iconoLogo' />
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
          <MDBNavbarNav>
            <div className="seccionNavegacion">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Inicio
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Contacto
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Nosotros
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar borderBtn">
                  Mi cuenta
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>

            <div className="seccionInput">
              <MDBNavbarItem>
                <MDBInput label="Busca Productos" contrast labelStyle={{ color: 'grey' }} type="text" className='textoInputNavbar pe-5 mt-1'>
                  <i className="fas fa-magnifying-glass trailing px-2"></i>
                </MDBInput>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  <MDBIcon far icon="heart mt-3 ms-3" size="lg" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  <MDBIcon fas icon="shopping-cart mt-3 ms-3" size='lg' />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}