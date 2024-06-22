import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTypography,
  MDBIcon
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa el CSS de FontAwesome
import '../signup/stylesSignup.css'; // Importa el archivo CSS

const CustomInput = ({ label, type, id }) => (
  <MDBInput wrapperClass='mb-4' label={label} id={id} type={type} />
);

export function Signup() {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow className="contenedorSingup">


        <MDBCol md='5' className='text-center text-md-start d-flex flex-column justify-content-center me-4'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Las mejores ofertas<br />
            <span className="text-custom-color" >para tus ahorros</span>
          </h1>

          <p className='px-3 text-muted'>
            Descubre oportunidades increíbles para ahorrar dinero en tus compras diarias.
            Con nuestro comparador, encontrarás las mejores ofertas adaptadas a tus necesidades y preferencias.
          </p>

        </MDBCol>

        <MDBCol md='5'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <CustomInput label='Nombres' id='formFirstName' type='text' />
                </MDBCol>

                <MDBCol col='6'>
                  <CustomInput label='Apellidos' id='formLastName' type='text' />
                </MDBCol>
              </MDBRow>

              <CustomInput label='Email' id='formEmail' type='email' />
              <CustomInput label='Contraseña' id='formPassword' type='password' />

              <MDBBtn className='w-100 mb-4' href='/error'  size='md' style={{ backgroundColor: '#15b1e5' }}>Registrate</MDBBtn>


              <div className="text-center">

                <p>o registrate con:</p>

                <MDBBtn tag='a' color='none' className='mx-3 social-btn'>
                  <MDBIcon fab icon='facebook-f' size="lg" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3 social-btn'>
                  <MDBIcon fab icon='twitter' size="lg" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3 social-btn'>
                  <MDBIcon fab icon='google' size="lg" />
                </MDBBtn>


                <MDBTypography tag='p'>¿Ya tienes una cuenta? <MDBBtn color='none' tag='a' href='/login'>Iniciar sesion</MDBBtn></MDBTypography>


              </div>


            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}
