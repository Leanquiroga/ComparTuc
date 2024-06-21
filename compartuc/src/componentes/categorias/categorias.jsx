import './styleCategorias.css'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardOverlay,
    MDBCardImage
} from 'mdb-react-ui-kit';

export function Categorias({ imagen1, imagen2, imagen3, imagen4 }) {
    return (
        <>
            <div className="categoriasContenedor">
                <div className="col-2 m-1">
                    <MDBCard background='dark' className='text-white'>
                        <MDBCardImage overlay src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' className='imagenCat' />
                        <MDBCardOverlay>
                            <MDBCardTitle className='d-flex justify-content-center tituloCat'>Pantalones</MDBCardTitle>
                        </MDBCardOverlay>
                    </MDBCard>
                </div>
                <div className="col-2 m-1">
                    <MDBCard background='dark' className='text-white'>
                        <MDBCardImage overlay src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' className='imagenCat' />
                        <MDBCardOverlay>
                            <MDBCardTitle className='d-flex justify-content-center tituloCat'>Pantalones</MDBCardTitle>
                        </MDBCardOverlay>
                    </MDBCard>
                </div>
                <div className="col-2 m-1">
                    <MDBCard background='dark' className='text-white'>
                        <MDBCardImage overlay src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' className='imagenCat' />
                        <MDBCardOverlay>
                            <MDBCardTitle className='d-flex justify-content-center tituloCat'>Pantalones</MDBCardTitle>
                        </MDBCardOverlay>
                    </MDBCard>
                </div>
                <div className="col-2 m-1">
                    <MDBCard background='dark' className='text-white'>
                        <MDBCardImage overlay src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' className='imagenCat' />
                        <MDBCardOverlay>
                            <MDBCardTitle className='d-flex justify-content-center tituloCat'>Pantalones</MDBCardTitle>
                        </MDBCardOverlay>
                    </MDBCard>
                </div>
                <div className="col-2 m-1">
                    <MDBCard background='dark' className='text-white'>
                        <MDBCardImage overlay src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' className='imagenCat' />
                        <MDBCardOverlay>
                            <MDBCardTitle className='d-flex justify-content-center tituloCat'>Pantalones</MDBCardTitle>
                        </MDBCardOverlay>
                    </MDBCard>
                </div>
            </div>
        </>
    )
}