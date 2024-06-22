import React from 'react';
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import '../error404/stylesError404.css';

export function Error404() {
  return (
    <MDBContainer className="text-center centered-container">
      <h2 className="text-muted">Home / 404 Error</h2>
      <h1 className="display-1 my-4">Error 404</h1>
      <p className="lead">Su página visitada no encontrada. Puede ir a la página de inicio.</p>
      <MDBBtn href="#" className='mt-4' size='md' style={{ backgroundColor: '#15b1e5' }}>Regresar al inicio</MDBBtn>
    </MDBContainer>
  );
};
