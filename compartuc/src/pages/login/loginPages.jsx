import { Footer } from "../../componentes/footer/footer"
import { Login } from "../../componentes/login/login"
import { NavbarInicio } from "../../componentes/navbar/navbar"
import { Header } from "../../componentes/header/header"

export function LoginPages() {
    return (
        <>
        <Header />
        <NavbarInicio />
        <Login></Login>
        <Footer/>
        </>
    )
}