import './styleCategorias.css'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardOverlay,
    MDBCardImage,
    MDBCardText,
    MDBBtn,
    MDBContainer
} from 'mdb-react-ui-kit';

export function Categorias({ imagen1, imagen2, imagen3, imagen4 }) {
    return (
        <>
            <MDBContainer>


                <div className="d-flex">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 m-0 cardImangeContenedor">
                            <MDBCard background='dark' className='text-white'>
                                <MDBCardImage overlay src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Moov-Library/default/dw6aab2dc8/17jun/triploReebok.jpg?q=90s' alt='...' className='imagenCat shadow-3-strong' />
                            </MDBCard>
                        </div>
                        <div className="col-lg-4 col-sm-12 m-0 cardImangeContenedor">
                            <MDBCard background='dark' className='text-white'>
                                <MDBCardImage overlay src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Moov-Library/default/dw5ceb5020/02jun/triplo2-MX-SPORTSWEAR2_600x800.png?q=90' alt='...' className='imagenCat shadow-3-strong' />
                            </MDBCard>
                        </div>
                        <div className="col-lg-4 col-sm-12 m-0 cardImangeContenedor">
                            <MDBCard background='dark' className='text-white'>
                                <MDBCardImage overlay src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Moov-Library/default/dw4cd9f7ed/17jun/triplo-SPEZIAL.jpg?q=90' alt='...' className='imagenCat shadow-3-strong' />
                            </MDBCard>
                        </div>
                    </div>
                </div>
            </MDBContainer>
        </>
    )
}