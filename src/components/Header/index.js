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

export function TableUsers(props) {

  console.log(props.id)
  const data = JSON.parse(localStorage.getItem(props.id));

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
        {data.map(data => (
          <S.Tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
}

export function TableProducts(props) {

  console.log(props.id)
  const data = JSON.parse(localStorage.getItem(props.id));

  return (
    <S.Table>
      <thead>
        <S.Tr>
          <S.Th>Produto</S.Th>
          <S.Th>Quantidade</S.Th>
          <S.Th>Valor</S.Th>
        </S.Tr>
      </thead>
      <S.Tbody>
        {data.map(data => (
          <S.Tr key={data.id}>
            <td>{data.product}</td>
            <td>{data.quantity}</td>
            <td>{data.value}</td>
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
}