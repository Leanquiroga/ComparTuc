import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa el CSS de FontAwesome
import '../login/stylesLogin.css'; // Importa el archivo CSS

const CustomInput = ({ label, type, id }) => (
  <MDBInput wrapperClass='mb-4' label={label} id={id} type={type} />
);

function Login() {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
          Las mejores ofertas<br />
            <span className="text-custom-color" >para tus ahorros</span>
        </h1>

          <p className='px-3 text-muted'>
            Descubre oportunidades increíbles para ahorrar dinero en tus compras diarias.
            Con nuestro comparador, encontrarás las mejores ofertas adaptadas a tus necesidades y preferencias.
          </p>
      </MDBCol>


        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <CustomInput label='Email' id='formEmail' type='email' />
              <CustomInput label='Contraseña' id='formPassword' type='password' />

              

              <MDBBtn className='w-100 mb-4' size='md' style={{ backgroundColor: '#15b1e5' }} >Iniciar sesion</MDBBtn>

              <div className="text-center">

                <p>o iniciar sesion con:</p>

                <MDBBtn tag='a' color='none' className='mx-3 social-btn'>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3 social-btn'>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3 social-btn'>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;
