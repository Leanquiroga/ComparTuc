import { Header } from '../../componentes/header/header.jsx'
import { Navbar } from '../../componentes/navbar/navbar.jsx'
import { Carrousel } from '../../componentes/carrousel/carrousel.jsx'
import { CardProducto } from '../../componentes/cardProducto/cardProducto.jsx'
import { Boton, BotonOutline, BotonRounded, BotonOutlineRounded } from '../../componentes/botones/botones.jsx'
import { Footer } from '../../componentes/footer/footer.jsx'

export function IndexPages() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <Carrousel imagen1={require("")}></Carrousel>
        </>
    )
}