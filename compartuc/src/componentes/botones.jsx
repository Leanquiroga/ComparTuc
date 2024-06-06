import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export function Boton({ textoBoton, color }) {
    return (
        <MDBBtn color={color} className='m-1'>
            {textoBoton}
        </MDBBtn>
    )
}
export function BotonRounded({ textoBoton, color }) {
    return (
        <MDBBtn rounded color={color} className='m-1'>
            {textoBoton}
        </MDBBtn>
    )
}