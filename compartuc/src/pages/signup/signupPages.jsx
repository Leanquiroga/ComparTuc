import { Signup } from "../../componentes/signup/signup"
import { NavbarRegistrarse } from "../../componentes/navbar/navbar"
import { Footer } from "../../componentes/footer/footer"

export function SignupPages(params) {
    return(
        <>
        <NavbarRegistrarse />
        <Signup />
        <Footer />
        </>
    )
}