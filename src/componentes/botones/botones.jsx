import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export function Boton({ texto, color }) {
    return (
        <MDBBtn color={color} className='m-1'>
            {texto}
        </MDBBtn>
    )
}
export function BotonRounded({ texto, color }) {
    return (
        <MDBBtn rounded color={color} className='m-1'>
            {texto}
        </MDBBtn>
    )
}

export function BotonOutline({ texto, color }) {
    return (
        <MDBBtn outline color={color} className='m-1'>
            {texto}
        </MDBBtn>
    )
}

export function BotonOutlineRounded({ texto, color }) {
    return (
        <MDBBtn rounded outline color={color} className='m-1'>
            {texto}
        </MDBBtn>
    )
}