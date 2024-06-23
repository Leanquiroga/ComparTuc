import { Signup } from "../../componentes/signup/signup"
import { NavbarRegistrarse } from "../../componentes/navbar/navbar"
import { Footer } from "../../componentes/footer/footer"
import { Header } from "../../componentes/header/header"

export function SignupPages(params) {
    return(
        <>
        <Header />
        <NavbarRegistrarse />
        <Signup />
        <Footer />
        </>
    )
}