import './styleCardProducto.css'

export function CardProducto({nombre, precio, descuento}) {
    let precioDescuento = 0;
    precioDescuento = precio -(precio*descuento/100);
    return (

        <div className="cardProducto shadow-4-strong">
            <div className="seccionImagenProducto">
                <img
                    src="https://spikeprague.cz/cdn/shop/products/b50b297589f79ceafe62e900e7b3e7e4_700x700.webp?v=1691493814"
                    alt=""
                    className='imagenProducto'
                />
                <h5 className='descuentoProducto px-3'>- {descuento}%</h5>
            </div>
            <div className='descripcionProducto m-3'>
                <h5 className='mt-3'><b>{nombre}</b></h5>
                <div className="seccionPrecio">
                    <h4 className="text-danger me-3"><b>${precioDescuento}</b></h4>
                    <h5><del>${precio}</del></h5>
                </div>

            </div>
        </div>
    )
}