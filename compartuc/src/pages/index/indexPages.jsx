import { Header } from '../../componentes/header/header.jsx'
import { Navbar } from '../../componentes/navbar/navbar.jsx'
import { Carrousel } from '../../componentes/carrousel/carrousel.jsx'
import { CardProducto } from '../../componentes/cardProducto/cardProducto.jsx'
import { Contador } from '../../componentes/contador/contador.jsx'
import { CarrouselProd } from '../../componentes/carrouselProd/carrouselProd.jsx'
import { Boton, BotonOutline, BotonRounded, BotonOutlineRounded } from '../../componentes/botones/botones.jsx'
import { Footer } from '../../componentes/footer/footer.jsx'
import './styleIndexPages.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'


export function IndexPages() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <Carrousel
                imagen1="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/ar_ss24_footbal_preactive_banner_hp_clp_d_e745e70a25.jpg"
                imagen2="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/Footbal_MN_03dc6911df.jpg"
                imagen3="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/SUPERNO_tcm217_834371_c674d1217b.jpg"
                imagen4="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ONSITE_LAM_FAST_REBORNMAIN_NAV_92f78fc501.jpg"
            />
            <div className="d-flex justify-content-center mt-5">
                <div className="col-10 mb-5">
                    <div className="contenedorContador mb-3">
                        <h3 className='tituloOferta me-5'><b>Ofertas Flash </b></h3>
                        <Contador />
                    </div>
                    <CarrouselProd
                        prod1={<CardProducto nombre="zapatillas NIKE" precio="100000" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/files/nike-sb-dunk-low-pro-why-so-sad-dropout-1_947x947.jpg?v=1705072312" />}
                        prod2={<CardProducto nombre="zapatillas NIKE" precio="100000" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/files/nike-sb-dunk-low-pro-why-so-sad-dropout-1_947x947.jpg?v=1705072312" />}
                        prod3={<CardProducto nombre="zapatillas NIKE" precio="100000" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/files/nike-sb-dunk-low-pro-why-so-sad-dropout-1_947x947.jpg?v=1705072312" />}
                        prod4={<CardProducto nombre="zapatillas NIKE" precio="100000" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/files/nike-sb-dunk-low-pro-why-so-sad-dropout-1_947x947.jpg?v=1705072312" />}
                        prod5={<CardProducto nombre="zapatillas NIKE" precio="100000" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/files/nike-sb-dunk-low-pro-why-so-sad-dropout-1_947x947.jpg?v=1705072312" />}
                        prod6={<CardProducto nombre="zapatillas NIKE" precio="100000" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/files/nike-sb-dunk-low-pro-why-so-sad-dropout-1_947x947.jpg?v=1705072312" />}
                        prod7={<CardProducto nombre="zapatillas NIKE" precio="100000" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/files/nike-sb-dunk-low-pro-why-so-sad-dropout-1_947x947.jpg?v=1705072312" />}
                        prod8={<CardProducto nombre="zapatillas NIKE" precio="100000" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/files/nike-sb-dunk-low-pro-why-so-sad-dropout-1_947x947.jpg?v=1705072312" />}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}