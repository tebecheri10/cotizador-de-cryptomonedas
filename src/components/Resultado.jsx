import React from 'react'
import styled from '@emotion/styled'

const Resultado = ({ resultado }) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGESPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  
  const Resultado = styled.div`
    color: #fff;
    font-family: "Lato";
    display: flex;
    align-items: start;
    gap: 30px;
    margin-top: 50px;
  `
  const Text = styled.p`
    font-size: 18px;

    span {
        font-weight: 700;
    }
  `
  const Imagen = styled.img`
    display: block;
    width: 150px;
    height: auto;
  `

  return (
    <Resultado>
        <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        />
        <div>
        <Text>El precio es de : <span>{PRICE}</span></Text>
        <Text>Precio más alto del día: <span>{ HIGHDAY}</span></Text>
        <Text>Precio más bajo del día : <span>{LOWDAY}</span></Text>
        <Text>Variación últimas 24 horas : <span>{CHANGESPCT24HOUR}</span></Text>
        <Text>Última actualización : <span>{LASTUPDATE}</span></Text>
        </div>
    </Resultado>
  )
}

export default Resultado