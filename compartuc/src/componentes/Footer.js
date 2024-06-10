// src/componentes/Footer.js
import React from 'react';
import styled from 'styled-components';
import { MDBContainer, MDBFooter, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const FooterContainer = styled(MDBFooter)`
  background-color: #0b5f81;
  color: white;
  text-align: center;
  padding: 20px;
`;

const SocialButton = styled(MDBBtn)`
  margin: 5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MDBContainer>
        <section className="mb-4">
          <SocialButton outline color="light" floating href="#!" role="button">
            <MDBIcon fab icon="facebook-f" />
          </SocialButton>

          <SocialButton outline color="light" floating href="#!" role="button">
            <MDBIcon fab icon="twitter" />
          </SocialButton>

          <SocialButton outline color="light" floating href="#!" role="button">
            <MDBIcon fab icon="google" />
          </SocialButton>

          <SocialButton outline color="light" floating href="#!" role="button">
            <MDBIcon fab icon="instagram" />
          </SocialButton>

          <SocialButton outline color="light" floating href="#!" role="button">
            <MDBIcon fab icon="linkedin-in" />
          </SocialButton>

          <SocialButton outline color="light" floating href="#!" role="button">
            <MDBIcon fab icon="github" />
          </SocialButton>
        </section>

        <section className="mb-4">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Suscribete</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example2" className="form-control" />
                  <label className="form-label" htmlFor="form5Example2">Email </label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <div className="row">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  {[1, 2, 3, 4].map((j) => (
                    <li key={j}>
                      <a href="#!" className="text-white">Link {j}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">ComparTuc.com</a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
