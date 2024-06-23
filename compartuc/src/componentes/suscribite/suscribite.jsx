import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdb-react-ui-kit'
import './styleSuscribite.css'

export function Suscribite() {
    return (
        <MDBContainer fluid style={{ backgroundColor: "hsl(0, 0%, 96%)" }} className='mb-5 mt-0 p-5'>
            <MDBRow className='contenedorSub d-flex justify-content-center'>
                <MDBCol md="5">
                    <h3 className='tituloSuscribite'>¡SUSCRIBITE Y ENTERATE DE TODOS LOS LANZAMIENTOS!</h3>
                    <h5 className='subTituloSuscribite text-muted mb-3 mt-3'>Ademas recibi novedades y promociones exclusivas en tu mail.</h5>
                    <MDBBtn href='/login' style={{ backgroundColor: '#15b1e5' }} size='lg'> Suscribirme</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}