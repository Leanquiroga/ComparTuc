import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa el CSS de FontAwesome
import './App.css'; // Importa el archivo CSS

const CustomInput = ({ label, type, id }) => (
  <MDBInput wrapperClass='mb-4' label={label} id={id} type={type} />
);

function App2() {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3 text-muted'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <CustomInput label='Email' id='formEmail' type='email' />
              <CustomInput label='Password' id='formPassword' type='password' />

              

              <MDBBtn className='w-100 mb-4' size='md' style={{ backgroundColor: '#f44336' }} >Log In</MDBBtn>

              <div className="text-center">

                <p>or log in with:</p>

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

export default App2;
