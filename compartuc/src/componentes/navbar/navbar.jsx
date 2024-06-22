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
import { IndexPages } from '../../pages/index/indexPages';


export function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='shadow-0 navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='../../pages/index/indexPages.jsx'>
          <div className='d-flex mx-5'>
            <h2 className='navbartitulo ms-3'>Compar</h2>
            <h2 className='navbartitulo2'>Tuc</h2>
          </div>
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
                <MDBNavbarLink active aria-current='page' href='../../pages/index/indexPages.jsx' className="mx-4 textoNavbar borderBtn">
                  Inicio
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Nosotros
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Inicio Sesion
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Registrarse
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>

            <div className="seccionInput">
              <MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='#'>
                    <MDBIcon fas icon="search mt-3 ms-3" size="lg" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
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
        <MDBNavbarBrand href={IndexPages}>
          <div className='d-flex mx-5'>
            <h2 className='navbartitulo ms-3'>Compar</h2>
            <h2 className='navbartitulo2'>Tuc</h2>
          </div>
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
                <MDBNavbarLink active aria-current='page' href='../../pages/index/indexPages.jsx' className="mx-4 textoNavbar">
                  Inicio
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar borderBtn">
                  Nosotros
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Inicio Sesion
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Registrarse
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>

            <div className="seccionInput">
              <MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='#'>
                    <MDBIcon fas icon="search mt-3 ms-3" size="lg" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
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

export function NavbarInicio() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='shadow-0 navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <div className='d-flex mx-5'>
            <h2 className='navbartitulo ms-3'>Compar</h2>
            <h2 className='navbartitulo2'>Tuc</h2>
          </div>
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
                  Nosotros
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar borderBtn">
                  Inicio Sesion
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Registrarse
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>

            <div className="seccionInput">
              <MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='#'>
                    <MDBIcon fas icon="search mt-3 ms-3" size="lg" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
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

export function NavbarRegistrarse() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='shadow-0 navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <div className='d-flex mx-5'>
            <h2 className='navbartitulo ms-3'>Compar</h2>
            <h2 className='navbartitulo2'>Tuc</h2>
          </div>
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
                  Nosotros
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar">
                  Inicio Sesion
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#' className="mx-4 textoNavbar borderBtn">
                  Registrarse
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>

            <div className="seccionInput">
              <MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='#'>
                    <MDBIcon fas icon="search mt-3 ms-3" size="lg" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
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