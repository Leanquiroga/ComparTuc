import './styleNosotrosPages.css'
import { NavbarNosotros } from '../../componentes/navbar/navbar'
import { Footer } from '../../componentes/footer/footer'
import { Rectangulo } from '../../componentes/rectangulo/rectangulo'
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBIcon
} from 'mdb-react-ui-kit';

export function NosotrosPages() {
    return (
        <>
            <NavbarNosotros />
            <MDBContainer>
                <MDBRow className="contenedorNosotros d-flex justify-content-center mt-5 mb-5">
                    <MDBCol md='5' className='mb-5'>
                        <h1 className='tituloNosotros mb-5'><b>Nosotros</b></h1>
                        <div className="d-flex">
                            <Rectangulo></Rectangulo>
                            <h2 className='subtituloNosotros mb-1'><b>¿Quienes Somos?</b></h2>
                        </div>
                        <p className='parrafoNosotros mt-2'>En nuestra tienda, nos dedicamos a ofrecerte una cuidada selección de ropa deportiva y de moda, siempre con las últimas tendencias y la mejor calidad. Nos diferenciamos por nuestro innovador sistema de comparación de precios, que te garantiza encontrar el mismo producto al mejor precio del mercado. Nuestro compromiso es brindarte una experiencia de compra sencilla, transparente y accesible, para que puedas disfrutar de tus prendas favoritas sin preocuparte por pagar de más. ¡Descubre con nosotros la forma inteligente de comprar ropa!</p>
                    </MDBCol>
                    <MDBCol md='5' className='text-center'>
                        <img src="https://i.pinimg.com/564x/35/5f/73/355f73c6ca4bf2e7e4238c5b3eb47f86.jpg" className='imgNosotros shadow-5-strong' alt="" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <MDBRow className="contenedorNosotros d-flex justify-content-center mt-5 mb-5">
                    <MDBCol md='5'>
                        <div className="d-flex">
                            <Rectangulo></Rectangulo>
                            <h2 className='subtituloNosotros mb-1'><b>Contacto</b></h2>
                        </div>
                        <p className='parrafoNosotros mt-2'>Nos encontramos en Avenida Santiago del Estero 1304, en el 5to Piso Departamento B, Trabajos en Horarios de Lunes a viernes de 8:00 a 18:00 hrs, Nuestro Gmail es compartuc@gmail.com
                            , Nuestro telefono es +381-574-4224 tambien podes seguirnos en nuestras redes sociales, Instagram: @ComparTuc facebook: CompartucOk</p>
                    </MDBCol>
                    <MDBCol md='5'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.576344364558!2d-65.2178099247317!3d-26.821615176701528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c4067b7acbf%3A0x46260af51811cfc3!2sSantiago%20del%20Estero%201304%2C%20T4000DWD%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1719030683360!5m2!1ses-419!2sar" width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='shadow-5-strong mb-5'></iframe>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer>
                <MDBRow className='d-flex justify-content-center mb-5'>
                    <MDBCol md='3' className='contenedorPersona m-3 shadow-4-strong rounded'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3577/3577429.png" alt="" />
                        <h4 className='' style={{ color: "#15b1e5" }}><b>Gonzalo Manzano</b></h4>
                        <h6 className='' style={{ color: "hsl(217, 10%, 50.8%)" }}><b>Front-End</b></h6>
                        <div className="redes">
                            <a href="" target='blank'>
                                <MDBIcon fab icon='instagram m-1' size='md' style={{ color: "purple" }} />
                            </a>
                            <a href="" target='blank'>
                                <MDBIcon fab icon='linkedin-in m-1' size='md' />
                            </a>
                            <a href="" target='blank'>
                                <MDBIcon fab icon="github m-1" size='md' style={{ color: "black" }} />
                            </a>
                        </div>
                    </MDBCol>
                    <MDBCol md='3' className='contenedorPersona m-3 shadow-4-strong rounded'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3577/3577429.png" alt="" />
                        <h4 className='' style={{ color: "#15b1e5" }}><b>Ignacio Martinez</b></h4>
                        <h6 className='' style={{ color: "hsl(217, 10%, 50.8%)" }}><b>Back-End</b></h6>
                        <div className="redes">
                            <a href="" target='blank'>
                                <MDBIcon fab icon='instagram m-1' size='md' style={{ color: "purple" }} />
                            </a>
                            <a href="" target='blank'>
                                <MDBIcon fab icon='linkedin-in m-1' size='md' />
                            </a>
                            <a href="" target='blank'>
                                <MDBIcon fab icon="github m-1" size='md' style={{ color: "black" }} />
                            </a>
                        </div>
                    </MDBCol>
                    <MDBCol md='3' className='contenedorPersona m-3 shadow-4-strong rounded'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3577/3577429.png" alt="" />
                        <h4 className='' style={{ color: "#15b1e5" }}><b>Leandro Quiroga</b></h4>
                        <h6 className='' style={{ color: "hsl(217, 10%, 50.8%)" }}><b>Front-End/Back-end</b></h6>
                        <div className="redes">
                            <a href="" target='blank'>
                                <MDBIcon fab icon='instagram m-1' size='md' style={{ color: "purple" }} />
                            </a>
                            <a href="" target='blank'>
                                <MDBIcon fab icon='linkedin-in m-1' size='md' />
                            </a>
                            <a href="" target='blank'>
                                <MDBIcon fab icon="github m-1" size='md' style={{ color: "black" }} />
                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </>
    )
}