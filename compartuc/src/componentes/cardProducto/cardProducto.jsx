import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import './styleCardProducto.css'

export function CardProducto({ nombre, precio, descuento, imagen }) {
    let precioConDescuento = 0;
    precioConDescuento = precio - (precio * descuento / 100);
    return (

        <div className="cardProducto shadow-4-strong">
            <div className="seccionImagenProducto">
                <img
                    src={imagen}
                    alt=""
                    className='imagenProducto'
                />
                <h5 className='descuentoProducto px-3 shadow-4-strong'>- {descuento}%</h5>
            </div>
            <div className='descripcionProducto'>
                <h5 className='mt-3 text-dark'><b>{nombre}</b></h5>
                <div className="precioEstrellas">
                    <div className="seccionPrecio mt-2">
                        <h5><del>${precio}</del></h5>
                        <h4 className="mb-3"><b>${precioConDescuento}</b></h4>
                    </div>
                    <div className="estrellasContenedor ms-5 mt-2">
                        <MDBIcon fas icon="star" className='estrella' />
                        <MDBIcon fas icon="star" className='estrella' />
                        <MDBIcon fas icon="star" className='estrella' />
                        <MDBIcon fas icon="star" className='estrella' />
                        <MDBIcon fas icon="star" className='estrella' />
                    </div>
                </div>
            </div>
        </div>
    )
}