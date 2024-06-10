// src/componentes/Header.js
import React from 'react';
import styled from 'styled-components';
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse } from 'mdb-react-ui-kit';

const NavbarContainer = styled(MDBNavbar)`
  background-color: #343a40;
`;

const NavbarBrand = styled(MDBNavbarBrand)`
  color: white;
  &:hover {
    color: #ddd;
  }
`;

const NavbarLink = styled(MDBNavbarLink)`
  color: white;
  &:hover {
    color: #ddd;
  }
`;

const Header = () => {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <NavbarContainer expand="lg" light>
      <MDBContainer fluid>
        <NavbarBrand href="#">BrandName</NavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <NavbarLink aria-current="page" href="#">
                Home
              </NavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavbarLink href="#">About</NavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavbarLink href="#">Services</NavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavbarLink href="#">Contact</NavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </NavbarContainer>
  );
};

export default Header;
