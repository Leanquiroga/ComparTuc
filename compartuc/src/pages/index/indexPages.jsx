import { Header } from '../../componentes/header/header.jsx'
import { Navbar } from '../../componentes/navbar/navbar.jsx'
import { Carrousel } from '../../componentes/carrousel/carrousel.jsx'
import { CardProducto, CardProductoSinD } from '../../componentes/cardProducto/cardProducto.jsx'
import { Contador } from '../../componentes/contador/contador.jsx'
import { CarrouselProd } from '../../componentes/carrouselProd/carrouselProd.jsx'
import { Boton, BotonOutline, BotonRounded, BotonOutlineRounded } from '../../componentes/botones/botones.jsx'
import { Footer } from '../../componentes/footer/footer.jsx'
import { Rectangulo } from '../../componentes/rectangulo/rectangulo.jsx'
import { Categorias } from '../../componentes/categorias/categorias.jsx'
import { Suscribite } from '../../componentes/suscribite/suscribite.jsx'
import './styleIndexPages.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit'

export function IndexPages() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <Carrousel
                imagen1="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/ar_ss24_footbal_preactive_banner_hp_clp_d_e745e70a25.jpg"
                imagen2="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/Footbal_MN_03dc6911df.jpg"
                imagen3="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/ar_ss24_football_reactive_banner_hp_d_6ff2257086.jpg"
                imagen4="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ONSITE_LAM_FAST_REBORNMAIN_NAV_92f78fc501.jpg"
            />
            <div className="d-flex justify-content-center contenedorCardsOfertas">
                <div className="col-10 mb-4">
                    <hr />
                    <Rectangulo texto="hoy" />
                    <div className="contenedorContador mb-3">
                        <h3 className='tituloOferta me-5'><b>Ofertas Flash </b></h3>
                        <Contador />
                    </div>
                    <CarrouselProd
                        prod1={<CardProducto nombre="Nike Why so Sad" precio="83920" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/files/nike-sb-dunk-low-pro-why-so-sad-dropout-1_947x947.jpg?v=1705072312" />}
                        prod2={<CardProducto nombre="Nike Dunk Low" precio="274990" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/products/nike-dunk-low-qs-co-jp-reverse-curry-2024-dropout-1_947x947.jpg?v=1709254425" />}
                        prod3={<CardProducto nombre="Jordan 1 Retro High" precio="98000" descuento="50" imagen="https://dropoutmilano.com/cdn/shop/products/jordan-1-retro-high-og-black-white-dropout-1_947x947.jpg?v=1709254387" />}
                        prod4={<CardProducto nombre="Nike dunk Low retro" precio="300000" descuento="30" imagen="https://dropoutmilano.com/cdn/shop/files/nike-dunk-low-retro-white-black-panda-2021-w-dropout-1_947x947.jpg?v=1709496059" />}
                        prod5={<CardProducto nombre="Jordan 1 low Mocha" precio="239902" descuento="25" imagen="https://dropoutmilano.com/cdn/shop/products/jordan-1-low-mocha-gs-dropout-1_947x947.jpg?v=1709502514" />}
                        prod6={<CardProducto nombre="Camiseta Argentina 86" precio="299999" descuento="10" imagen="https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw97c411d5/products/LE_LTN0222154/LE_LTN0222154-1.JPG" />}
                        prod7={<CardProducto nombre="Buzo Nike tech fleece" precio="120000" descuento="10" imagen="https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf856da1d/products/NIFB7916-010/NIFB7916-010-1.JPG" />}
                        prod8={<CardProducto nombre="Nike Dunk Low Vintage" precio="40000" descuento="15" imagen="https://dropoutmilano.com/cdn/shop/products/nike-dunk-low-vintage-navy-women-s-dropout-1_947x947.jpg?v=1709502323" />}
                    />
                </div>
            </div>
            <div className="col-12 mb-5 p-4 pt-0 text-center testboton">
                <MDBBtn href="/error" className='mt-4' size='lg' style={{ backgroundColor: '#15b1e5' }}>Ver mas Ofertas</MDBBtn>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-10">
                    <hr />
                    <div className="contenedorCategorias mb-3">
                        <Rectangulo texto="categorias" />
                        <h3 className='tituloOferta me-5 mt-2 mb-4'><b>Temporada</b></h3>
                        <Categorias />
                    </div>
                </div>
            </div>


            <div className="d-flex justify-content-center mb-4 mt-5">
                <div className="col-10">
                    <hr />
                    <Rectangulo texto="Este mes" />
                    <h3 className='tituloOferta me-5 mt-2'><b>Productos mas vendidos</b></h3>
                    <CarrouselProd
                        prod1={<CardProductoSinD nombre="Nike Why so Sad" precio="83920" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/files/nike-sb-dunk-low-pro-why-so-sad-dropout-1_947x947.jpg?v=1705072312" />}
                        prod2={<CardProductoSinD nombre="Nike Dunk Low" precio="274990" descuento="20" imagen="https://dropoutmilano.com/cdn/shop/products/nike-dunk-low-qs-co-jp-reverse-curry-2024-dropout-1_947x947.jpg?v=1709254425" />}
                        prod3={<CardProductoSinD nombre="Jordan 1 Retro High" precio="98000" descuento="50" imagen="https://dropoutmilano.com/cdn/shop/products/jordan-1-retro-high-og-black-white-dropout-1_947x947.jpg?v=1709254387" />}
                        prod4={<CardProductoSinD nombre="Nike dunk Low retro" precio="300000" descuento="30" imagen="https://dropoutmilano.com/cdn/shop/files/nike-dunk-low-retro-white-black-panda-2021-w-dropout-1_947x947.jpg?v=1709496059" />}
                        prod5={<CardProductoSinD nombre="Jordan 1 low Mocha" precio="239902" descuento="25" imagen="https://dropoutmilano.com/cdn/shop/products/jordan-1-low-mocha-gs-dropout-1_947x947.jpg?v=1709502514" />}
                        prod6={<CardProductoSinD nombre="Camiseta Argentina 86" precio="299999" descuento="10" imagen="https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw97c411d5/products/LE_LTN0222154/LE_LTN0222154-1.JPG" />}
                        prod7={<CardProductoSinD nombre="Buzo Nike tech fleece" precio="120000" descuento="10" imagen="https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf856da1d/products/NIFB7916-010/NIFB7916-010-1.JPG" />}
                        prod8={<CardProductoSinD nombre="Nike Dunk Low Vintage" precio="40000" descuento="15" imagen="https://dropoutmilano.com/cdn/shop/products/nike-dunk-low-vintage-navy-women-s-dropout-1_947x947.jpg?v=1709502323" />}
                    />

                </div>
            </div>
            <div className="col-12 mb-5 text-center testboton">
                <MDBBtn href="/error" className='mt-4' size='lg' style={{ backgroundColor: '#15b1e5' }}>Ver mas Productos</MDBBtn>
            </div>

            <video src={require("../../images/video.mp4")} autoPlay loop className='w-100' muted alt="..."></video>
            <Suscribite></Suscribite>
            <Footer />
        </>
    )
}