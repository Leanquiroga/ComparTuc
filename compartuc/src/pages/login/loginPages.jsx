import { Footer } from "../../componentes/footer/footer"
import { Login } from "../../componentes/login/login"
import { NavbarInicio } from "../../componentes/navbar/navbar"

export function LoginPages() {
    return (
        <>
        <NavbarInicio />
        <Login></Login>
        <Footer/>
        </>
    )
}