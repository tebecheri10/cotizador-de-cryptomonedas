import React from 'react'
import styled from '@emotion/styled'

const useSelectMonedas = (label, opciones) => {

    const Label = styled.label`
        color: #fff;
    `
    const SelectMonedas = ()=>( 
       <>
            <Label htmlFor=""> { label}</Label>
            <select value="">
             {opciones.map( opcion =>{
                return(
                <option
                key={opcion.id} 
                value={opcion.id}
                >{opcion.nombre}</option>
                )
                
             })}
            </select>
       </>
    )
    return [ SelectMonedas ]
}

export default useSelectMonedas