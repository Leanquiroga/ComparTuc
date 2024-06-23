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
                imagen1="https://images.samsung.com/is/image/samsung/assets/ar/home-s24-series/ElegidodelMesHOTSALEPRINCIPALES_bannerS24UltraAI_1366x607.png?imwidth=2560"
                imagen2="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
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
                        prod1={<CardProductoSinD nombre="Iphone 14 Pro max" precio="1982920" descuento="20" imagen="https://tienda.personal.com.ar/images/720/webp/i_Phone_14_Pro_Deep_Purple_303ce73cf6.png" />}
                        prod2={<CardProductoSinD nombre="Iphone 13 Pro max" precio="500990" descuento="20" imagen="https://tienda.personal.com.ar/images/320/webp/Iphone13_pro_Silver_min_5d9348c156.png" />}
                        prod3={<CardProductoSinD nombre="Cargador Iphone" precio="98000" descuento="50" imagen="https://tienda.personal.com.ar/images/320/webp/Cargador_Apple_20w_5ecbe22236.png" />}
                        prod4={<CardProductoSinD nombre="Samsung Galaxy s24" precio="999000" descuento="30" imagen="https://tienda.personal.com.ar/images/320/webp/Samsung_Galaxy_S24_Cobalt_Violet_758713930c.png" />}
                        prod5={<CardProductoSinD nombre="Joystick Xbox" precio="239902" descuento="25" imagen="https://tienda.personal.com.ar/images/320/webp/Consola_Xbox_Series_S_1_TB_9eedf82364.png" />}
                        prod6={<CardProductoSinD nombre="Auriculares JBL" precio="299999" descuento="10" imagen="https://tienda.personal.com.ar/images/320/webp/Auriculares_JBL_Quantum_TWS_1_b9aaf024ee.png" />}
                        prod7={<CardProductoSinD nombre="Samsung Book3" precio="589000" descuento="10" imagen="https://tienda.personal.com.ar/images/320/webp/Notebook_Samsung_Galaxy_Book3_Pro_Beige2_360f0c7e19.png" />}
                        prod8={<CardProductoSinD nombre="Nike Dunk Low Vintage" precio="300000" descuento="15" imagen="https://dropoutmilano.com/cdn/shop/products/nike-dunk-low-vintage-navy-women-s-dropout-1_947x947.jpg?v=1709502323" />}
                    />

                </div>
            </div>
            <div className="col-12 mb-5 text-center testboton">
                <MDBBtn href="/error" className='mt-4' size='lg' style={{ backgroundColor: '#15b1e5' }}>Ver mas Productos</MDBBtn>
            </div>

            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center text-center mb-9'>
                    <MDBCol md="10">
                        <hr />
                        <h4 className='tituloBe'>Liberá el poder de</h4>
                        <h4 className='tituloBe2 mb-4'>ComparTuc</h4>
                        <h6 className='text-muted'>Potentes analisis de crecimiento <br />y productos de autoservicio para ayudarte a convertir, atraer y retener más.</h6>
                        <MDBBtn size='lg' color='dark' className='mt-4 px-5'>Comenzar!</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <video src={require("../../images/video.mp4")} autoPlay loop className='w-100 mb-0' muted alt="..."></video>
            <Suscribite></Suscribite>
            <Footer />
        </>
    )
}