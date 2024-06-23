import { Header } from "../../componentes/header/header";
import { Error404 } from "../../componentes/error404/error404";
import { Footer } from "../../componentes/footer/footer";
import { Navbar } from "../../componentes/navbar/navbar";

export function Error404Pages() {
    return (
        <>
            <Header />
            <Navbar />
            <Error404 />
            <Footer />
        </>
    )
}