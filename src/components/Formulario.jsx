import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/Data'
import Error from './Error'

const Formulario = ({
  parMonedas,
  setParMonedas
}) => {
    const [criptos, setCriptos ] = useState([])
    const [moneda,  SelectMonedas ] = useSelectMonedas("Elige tu Moneda", monedas)
    const [criptomoneda,  SelectCriptomoneda ] = useSelectMonedas("Elige tu Criptomoneda", criptos)
    const [ error , setError ] = useState(false);
    useEffect(()=>{
       
          const consultarAPI = async()=>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const dataAPI = await fetch(url);
            const resultado = await dataAPI.json()
           
            const arrayCriptos = resultado.Data.map(cripto=>{
            const objeto = {
              id: cripto.CoinInfo.Name,
              nombre: cripto.CoinInfo.FullName
            }
              return objeto
            })
          setCriptos(arrayCriptos)
        } 
        consultarAPI()
    },[])

    const handleSubmit = (e)=>{
      e.preventDefault()
      if([moneda, criptomoneda].includes("")){
            setError(true)
            return
      }
      setParMonedas({
        moneda,
        criptomoneda
      })
      setError(false)
    }


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
        margin-top: 30px ;
        &:hover {
            background-color: #7176ed;
            cursor: pointer;
        }
    `

  return (
    <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda/>
        {error?<Error> Todos los campos son obligatorios</Error> : "" } 
        <InputSubmit
         type="submit"
          value="Cotizar"
           />
    </form>
  )
}

export default Formulario