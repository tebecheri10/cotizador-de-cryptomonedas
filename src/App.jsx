import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import './App.css'

function App() {

  const [parMonedas, setParMonedas ] = useState({})
  const [resultado, setResultado ] = useState({})
  const [spinner, setSpinner] = useState(false)
  
  
  const { moneda, criptomoneda} = parMonedas
  

  useEffect(()=>{
    if(Object.keys(parMonedas).length > 0){
      setSpinner(true)
      const getPair = async ()=>{
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
         const pairResult = await fetch(url)
         const pairResultData = await pairResult.json();
         setResultado(pairResultData.DISPLAY[criptomoneda][moneda])
      setSpinner(false)
      }
      getPair()
    }
 
  },[parMonedas])

  const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
  `
  const Imagen = styled.img`
   max-width: 400px;
   width: 80%;
   margin: 50px auto 0 auto;
   display: block;
 `

  const Heading = styled.h1`
    color: #fff;
    text-align: center;
    margin-top: 8px;
    font-weight: 700;
    font-size: 34px;
    margin-top: 50px;
    &::after{
      content: '';
      width: 100px;
      height: 6px;
      background-color: #66a2fe ;
      display: block;
      margin: 10px auto;
    }
  `

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
      />
      <div>
        <Heading>Cotiza criptomonedas en el instante</Heading>
        <Formulario
        parMonedas={parMonedas}
        setParMonedas={setParMonedas}
        />
        { spinner && <Spinner/>}
        {
         resultado.PRICE && <Resultado
           resultado={ resultado }
          />

        }
      </div>
    </Contenedor>
  )
}

export default App
