import { Header } from '../../componentes/header/header.jsx'
import { Navbar } from '../../componentes/navbar/navbar.jsx'
import { Carrousel } from '../../componentes/carrousel/carrousel.jsx'
import { CardProducto } from '../../componentes/cardProducto/cardProducto.jsx'
import { Boton, BotonOutline, BotonRounded, BotonOutlineRounded } from '../../componentes/botones/botones.jsx'
import { Footer } from '../../componentes/footer/footer.jsx'
import imagen1 from '../../images/nike.jpg'

export function IndexPages() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className='row'>
                <div className="col-3">
                    
                </div>
                <div className="col-12">
                    <Carrousel
                        imagen1="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/ar_ss24_footbal_preactive_banner_hp_clp_d_e745e70a25.jpg"
                        imagen2="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/Footbal_MN_03dc6911df.jpg"
                        imagen3="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/SUPERNO_tcm217_834371_c674d1217b.jpg"
                        imagen4="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ONSITE_LAM_FAST_REBORNMAIN_NAV_92f78fc501.jpg"
                    />
                </div>
            </div>

        </>
    )
}