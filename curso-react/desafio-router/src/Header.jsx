import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 30px;

  a {
    color: black;
    font-size: 24px;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 10px;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: rgba(0, 0, 0, 0.45);
    }

    &.active {
      background-color: rgba(0, 0, 0, 0.45);
    }
  }
`

function Header() {
  return (
    <Container>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="produtos">Produtos</NavLink>
      <NavLink to="contato">Contato</NavLink>
    </Container>
  )
}

export default Header
