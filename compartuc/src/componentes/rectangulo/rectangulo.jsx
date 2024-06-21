import './styleRectangulo.css'

export function Rectangulo({ texto }) {
    return (
        <div className='contenedorRectangulo'>
            <div className="rectangulo"></div>
            <h5 className='textoRectangulo'> <b>{texto}</b></h5>
        </div>
    )
}