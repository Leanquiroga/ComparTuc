import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export function Boton({ textoBoton }) {
    return (
        <MDBBtn rounded color="dark" size="lg">
            {textoBoton}
        </MDBBtn>
    )
}