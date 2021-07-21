import React from 'react'
import * as S from './style'
import { Link } from 'react-scroll'
import { useHistory } from 'react-router-dom'

export function HeaderHome() {
  const history = useHistory()

  function handleUsers() {
    history.push('/users')
  }

  function handleProducts() {
    history.push('/products')
  }

  return (
    < S.Header>
      <S.List>
        <Link to="products" spy={true} smooth={true}>
          <S.Button type="submit" >DESTAQUES</S.Button>
        </Link>
        <Link to="footer" spy={true} smooth={true}>
          <S.Button type="submit">CONTATO</S.Button>
        </Link>
        <S.Button type="submit" onClick={handleUsers}>CLIENTES</S.Button>
        <S.Button type="submit" onClick={handleProducts}>PRODUTOS</S.Button>
      </S.List>
    </S.Header >
  );
}

export function HeaderGeneric() {
  const history = useHistory()

  function handleCadastro() {
    history.push('/')
  }

  return (
    < S.Header>
      <S.List>
        <S.Button type="submit" onClick={handleCadastro}>HOME</S.Button>
      </S.List>
    </S.Header >
  );
}

export function Table(props) {
  const products = JSON.parse(localStorage.getItem('users'));

  return (
    <S.Table>
      <thead>
        <S.Tr>
          <S.Th>Nome</S.Th>
          <S.Th>E-mail</S.Th>
          <S.Th>Telefone</S.Th>
        </S.Tr>
      </thead>
      <S.Tbody>
        {products.map(product => (
          <S.Tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.email}</td>
            <td>{product.phone}</td>
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );

















}