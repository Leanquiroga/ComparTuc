import React from 'react';
import './styleFooter.css';
// import styled from 'styled-components';
import { MDBContainer, MDBFooter, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter className='footer'>
      <MDBContainer>
        <MDBContainer>
          <section className="m-5">
            <div className="row">
              {[1, 2, 3].map((i) => (
                <div key={i} className="col-lg-4 col-md-4 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    {[1, 2, 3].map((j) => (
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

        <div className="d-flex contenedorFooter row">
          <div className="col-6">
            © 2024 Company, Inc. All rights reserved.
            <a className="text-white" href="./"><br />©ComparTuc.com Copyright </a>
          </div>


          <section className="mb-4 col-lg-6 col-sm-7">
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
    </MDBFooter>

  );
};

