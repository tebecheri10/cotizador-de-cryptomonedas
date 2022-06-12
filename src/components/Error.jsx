import React from 'react'
import styled from '@emotion/styled'

const Error = ({ children }) => {

  const ErrorMsg = styled.h3`
    color: #fff;
    background-color: #d66565;
    font-size: 24px;
    font-weight: 700;
    font-family: "Lato";
    border: 1px solid red;
    padding: 10px;
    border-radius: 6px;
    text-align: center;
  `  

  return (
    <ErrorMsg> {children }</ErrorMsg>
  )
}

export default Error