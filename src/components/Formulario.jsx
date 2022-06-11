import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const Formulario = () => {

    const monedas = [
        { id: "USD", nombre: "Dolar de Estados Unidos"},
        { id: "MXN", nombre: "Peso Mexicano"},
        { id: "EUR", nombre: "Euro"},
        { id: "GBP", nombre: "Libra Esterlina"},
    ]

    const [ SelectMonedas ] = useSelectMonedas("initial value", monedas)



    const InputSubmit = styled.input`
        background-color:#9497ff;
        border: none;
        width: 100%;
        padding: 10px;
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 5px;
        font-size: 20px;
        transition: background-color .3s ease;
        &:hover {
            background-color: #7176ed;
            cursor: pointer;
        }
    `

  return (
    <form>
        <SelectMonedas />
        <InputSubmit
         type="submit"
          value="Cotizar"
           />
    </form>
  )
}

export default Formulario