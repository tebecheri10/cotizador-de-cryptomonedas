import { useState } from 'react'
import Formulario from './components/Formulario'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import './App.css'

function App() {


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
   margin: 100px auto 0 auto;
   display: block;
 `

  const Heading = styled.h1`
    color: #fff;
    text-align: center;
    margin-top: 8px;
    font-weight: 700;
    font-size: 34px;
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

        <Formulario />
      </div>
    </Contenedor>
  )
}

export default App
