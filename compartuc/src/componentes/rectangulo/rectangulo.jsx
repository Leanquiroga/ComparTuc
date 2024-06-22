import './styleRectangulo.css'

export function Rectangulo({ texto }) {
    return (
        <div className='contenedorRectangulo'>
            <div className="rectangulo shadow-3-strong"></div>
            <h5 className='textoRectangulo'> <b>{texto}</b></h5>
        </div>
    )
}